export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const body = await req.json();
    console.log("Contact form submission:", body);
    
    // TODO: Integrate email service here (e.g., Resend, Nodemailer)
    
    return Response.json({
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
