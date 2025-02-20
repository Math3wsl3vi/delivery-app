import { NextRequest, NextResponse } from "next/server";
import Twilio from "twilio";

export async function POST(req: NextRequest) {
  const { orderId, items, total, phone, address } = await req.json();

  const client = Twilio(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!
  );

  try {
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: process.env.MY_WHATSAPP_NUMBER!,
      body: `📦 New Order Received!\n\n🛒 Order From:${phone}\n Delivery Location:${address}\n  Order ID: ${orderId}\n📝 Items:\n${items
        .map((item: any) => `- ${item.name} x${item.quantity} (Ksh ${item.price})`)
        .join("\n")}\n\n💰 Total: Ksh ${total}\n🚀 Ready for processing!`,
    });

    return NextResponse.json({ success: true, messageSid: message.sid });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
