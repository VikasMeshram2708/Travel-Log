"use server";

import prisma from "@/lib/prisma";
import { contactSchema } from "@/models";
import assert from "node:assert";

export async function contactQuery(prevState: unknown, data: FormData) {
  for (const [key, value] of data.entries()) {
    console.dir({ key, value });
  }

  const filteredFormEnteries = Object.fromEntries(
    data.entries().filter(([key]) => !key.startsWith("$ACTION_"))
  );

  // sanitize incoming data
  const parsed = contactSchema.safeParse(filteredFormEnteries);
  if (!parsed.success) {
    return {
      formErrors: parsed.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { email, message, name, subject } = parsed.data;
  try {
    const record = await prisma.contactUs.create({
      data: {
        email,
        subject,
        message,
        name,
      },
    });
    assert.ok(record.id, "Contact form submission failed");

    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    const err = e as unknown as Error;
    throw (
      err?.message ?? "Something went wrong. Contact form failed try again."
    );
  }
}
