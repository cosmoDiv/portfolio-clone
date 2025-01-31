import Email from "@/features/Email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { email, name, message, subject } = await request.json();

    // Validate required fields
    if (!email || !name || !message || !subject) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Send the email using Resend
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Thanks for reaching out!",
      react: Email({ name, email, message, subject }),
    });
    console.log(response.data);
    // Return success response
    return new Response(
      JSON.stringify({ message: "Email sent successfully", data: response }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error: unknown) {
    console.error("Error sending email:", error);

    // Type assertion for error handling
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    // Return error response
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
