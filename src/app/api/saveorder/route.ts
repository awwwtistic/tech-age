import { getAdminDB } from "@/firebaseAdmin";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { cart, email, id, totalAmt } = await request.json();

    if (
      !Array.isArray(cart) ||
      typeof email !== "string" ||
      typeof id !== "string"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid order payload" },
        { status: 400 }
      );
    }

    if (cart.length) {
      const userOrdersRef = getAdminDB()
        .collection("users")
        .doc(email)
        .collection("orders")
        .doc(id);

      await userOrdersRef.set(
        { email, value: { amount: totalAmt, items: cart } },
        { merge: true }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Order saved successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to save order",
      },
      { status: 500 }
    );
  }
};