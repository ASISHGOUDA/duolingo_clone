import Stripe from "stripe";
import { headers } from "next/headers";


import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("Stripe-Signature") as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch(error: any) {
    return new NextResponse(`webhook error: ${error.message}`, {
      status: 400,
    });
  }

  return new NextResponse(null, { status: 200 });
};