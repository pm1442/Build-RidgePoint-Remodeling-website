const GHL_CONTACTS_URL = "https://services.leadconnectorhq.com/contacts/upsert";

function text(value) {
  return typeof value === "string" ? value.trim() : "";
}

function splitName(name) {
  const [firstName = "", ...lastName] = text(name).split(/\s+/);
  return { firstName, lastName: lastName.join(" ") };
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  const token = process.env.GHL_PRIVATE_INTEGRATION_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;

  if (!token || !locationId) {
    console.error("GHL form connection is missing its server environment variables.");
    return Response.json({ error: "The form is temporarily unavailable. Please call (386) 291-5200.", reference: "CRM-CONFIG" }, { status: 503 });
  }

  let input;
  try {
    input = await request.json();
  } catch {
    return Response.json({ error: "Please try submitting the form again." }, { status: 400 });
  }

  const name = text(input.name);
  const contact = text(input.contact);
  const projectType = text(input.projectType) || "Not Sure Yet";
  const propertyLocation = text(input.propertyLocation);
  const details = text(input.details);

  if (!name || !contact || !details) {
    return Response.json({ error: "Please complete your name, contact information, and project details." }, { status: 400 });
  }

  const { firstName, lastName } = splitName(name);
  const contactDetails = isEmail(contact) ? { email: contact } : { phone: contact };

  let ghlResponse;
  try {
    ghlResponse = await fetch(GHL_CONTACTS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Version: "2021-07-28",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        name,
        locationId,
        source: "Website quote form",
        ...contactDetails,
        customFields: [
          { key: "project_type", fieldValue: projectType },
          { key: "project_details", fieldValue: details },
          ...(propertyLocation ? [{ key: "property_city_or_address", fieldValue: propertyLocation }] : []),
        ],
      }),
    });
  } catch (error) {
    console.error("GHL contact request could not be reached", error);
    return Response.json({ error: "We could not send your request just now. Please call (386) 291-5200.", reference: "CRM-CONNECTION" }, { status: 502 });
  }

  if (!ghlResponse.ok) {
    console.error("GHL contact upsert failed", ghlResponse.status, await ghlResponse.text());
    return Response.json({ error: "We could not send your request just now. Please call (386) 291-5200.", reference: `CRM-${ghlResponse.status}` }, { status: 502 });
  }

  let response;
  try {
    response = await ghlResponse.json();
  } catch (error) {
    console.error("GHL returned an unreadable contact response", error);
    return Response.json({ error: "We could not send your request just now. Please call (386) 291-5200.", reference: "CRM-RESPONSE" }, { status: 502 });
  }
  const contactId = response?.contact?.id;

  if (contactId) {
    try {
      const tagResponse = await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/tags`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({ tags: ["Website Lead"] }),
      });

      if (!tagResponse.ok) {
        console.error("GHL Website Lead tag failed", tagResponse.status, await tagResponse.text());
      }
    } catch (error) {
      console.error("GHL Website Lead tag request could not be reached", error);
    }
  }

  return Response.json({ ok: true });
}
