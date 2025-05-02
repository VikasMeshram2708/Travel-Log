"use server";

import prisma from "@/lib/prisma";
import { memorySchema, MemorySchema } from "@/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import assert from "node:assert";

// save memory
export async function saveMemory(data: MemorySchema) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    throw new Error("Un-Authorized, Login required");
  }

  const user = await getUser();
  assert.ok(user, "User not found");

  // Validate input data
  const parsed = memorySchema.safeParse(data);
  if (!parsed.success) {
    return {
      formError: parsed?.error?.flatten().fieldErrors,
      success: false,
    };
  }

  const { date, notes, location, tags } = parsed.data;

  try {
    // First, ensure the user exists
    const tenantUser = await prisma.user.upsert({
      where: { email: user.email as string },
      update: {}, // No updates needed if user exists
      create: {
        name: user.given_name ?? "",
        picture: user.picture,
        email: user.email ?? "",
        role: "USER",
        tenantId: user.id,
      },
    });

    // Then create the travel log
    await prisma.travelLog.create({
      data: {
        date,
        notes,
        location,
        mediaFiles: [],
        userId: tenantUser.id, // Use the ensured user's ID
        tags: tags,
        longitude: "",
        latitude: "",
      },
    });

    return {
      success: true,
      message: "Memory saved successfully",
    };
  } catch (e) {
    console.error("Error saving memory:", e);
    throw new Error("Failed to save memory. Please try again.");
  }
}

// save image
export async function saveImage(data: unknown) {
  console.log("incd", data);
  return {
    success: true,
  };
}
