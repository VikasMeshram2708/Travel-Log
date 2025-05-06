"use server";

import prisma from "@/lib/prisma";

export async function subscribe(prevState: unknown, formData: FormData) {
  try {
    const emailValue = formData.get("email");

    if (!emailValue) {
      throw new Error("Email is required");
    }

    await prisma.newLetter.create({
      data: {
        email: emailValue as string,
      },
    });

    return {
      message: "Thank you for subscribing!",
      isError: false,
    };
  } catch (error) {
    return {
      message: error instanceof Error ? error.message : "Subscription failed",
      isError: true,
    };
  }
}
