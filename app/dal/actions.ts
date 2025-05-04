"use server";

import prisma from "@/lib/prisma";
import { mediaSchema, MediaSchema, memorySchema, MemorySchema } from "@/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import assert from "node:assert";

// Save memory
export async function saveMemory(data: MemorySchema) {
  const { isAuthenticated, getUser } = getKindeServerSession();

  // Check if user is authenticated
  if (!(await isAuthenticated())) {
    throw new Error("Unauthorized, login required");
  }

  // Get user details
  const user = await getUser();
  assert.ok(user, "User not found");

  // Validate input data with Zod schema
  const parsed = memorySchema.safeParse(data);
  if (!parsed.success) {
    return {
      formError: parsed.error.flatten().fieldErrors,
      success: false,
    };
  }

  const {
    country,
    location,
    visitedOn,
    notes,
    tags,
    latitude,
    longitude,
    duration,
    city,
    countryCode,
  } = parsed.data;

  try {
    // Ensure user exists in the database
    const tenantUser = await prisma.user.upsert({
      where: { email: user.email as string },
      update: {}, // No updates needed if the user exists
      create: {
        name: user.given_name ?? "",
        picture: user.picture,
        email: user.email ?? "",
        role: "USER",
        tenantId: user.id,
      },
    });

    // Create a new travel log for the user
    await prisma.tripLog.create({
      data: {
        country,
        countryCode,
        city,
        duration,
        visitedOn,
        notes,
        location,
        tags,
        mediaFiles: {
          create: [],
        },
        latitude: String(latitude),
        longitude: String(longitude),
        userId: tenantUser.id,
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

// Save Media memory
export async function saveMediaMemory(data: MediaSchema) {
  // console.log("incd", data);
  // Sanitize incoming data
  const parsed = mediaSchema.safeParse(data);

  if (!parsed.success) {
    return {
      parseError: parsed.error.flatten().fieldErrors,
      success: false,
    };
  }
  assert.ok(parsed.success, "Schema validation failed");

  const { fileId, url, fileSize, mediaFileType, tripLogId } = parsed.data;
  try {
    await prisma.mediaFile.create({
      data: {
        url,
        mediaType: mediaFileType,
        tripLogId,
        fileId,
        fileSize,
      },
    });
    return {
      success: true,
      message: "Media uploaded successfully",
    };
  } catch (e) {
    console.error(e);
    const err = e as unknown as Error;

    throw err?.message ?? "Something went wrong. Media upload failed";
  }
}

// Save image (Currently not implemented, placeholder)
export async function saveImage(data: unknown) {
  // console.log("Received image data", data);
  return {
    success: true,
  };
}
