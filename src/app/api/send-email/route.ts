import sendEmail from "@/helper/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  try {
    await sendEmail(name, email, message);
    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Email sent successfully!",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: "Failed to send email.",
      }),
      { status: 500 }
    );
  }
}
