import sendEmail from "@/helper/sendEmail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new NextResponse( 
        JSON.stringify({
          success: false,
          message: "All fields are required.",
        }),
        { status: 400 }
      );
    }

    const response = await sendEmail(name, email, message);
    if (!response || !response.success) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Failed to send email.",
        }),
        { status: 500 }
      );
    }


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