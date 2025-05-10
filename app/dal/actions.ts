"use server";

import prisma from "@/lib/prisma";
import { mediaSchema, MediaSchema, memorySchema } from "@/models";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import assert from "node:assert";

// Save memory
// export async function saveMemory(data: MemorySchema) {
//   const { isAuthenticated, getUser } = getKindeServerSession();

//   // Check if user is authenticated
//   if (!(await isAuthenticated())) {
//     throw new Error("Unauthorized, login required");
//   }

//   // Get user details
//   const user = await getUser();
//   assert.ok(user, "User not found");

//   // Validate input data with Zod schema
//   const parsed = memorySchema.safeParse(data);
//   if (!parsed.success) {
//     return {
//       formError: parsed.error.flatten().fieldErrors,
//       success: false,
//     };
//   }

//   const {
//     country,
//     location,
//     visitedOn,
//     notes,
//     tags,
//     latitude,
//     longitude,
//     duration,
//     city,
//     countryCode,
//   } = parsed.data;

//   try {
//     // Ensure user exists in the database
//     const tenantUser = await prisma.user.upsert({
//       where: { email: user.email as string },
//       update: {}, // No updates needed if the user exists
//       create: {
//         name: user.given_name ?? "",
//         picture: user.picture,
//         email: user.email ?? "",
//         role: "USER",
//         tenantId: user.id,
//       },
//     });

//     // Create a new travel log for the user
//     await prisma.tripLog.create({
//       data: {
//         country,
//         countryCode,
//         city,
//         duration,
//         visitedOn,
//         notes,
//         location,
//         tags,
//         mediaFiles: {
//           create: [],
//         },
//         latitude: String(latitude),
//         longitude: String(longitude),
//         userId: tenantUser.id,
//       },
//     });

//     return {
//       success: true,
//       message: "Memory saved successfully",
//     };
//   } catch (e) {
//     console.error("Error saving memory:", e);
//     throw new Error("Failed to save memory. Please try again.");
//   }
// }

// Save Media memory
export async function saveMediaMemory(data: MediaSchema) {
  // console.log("incd", data);
  // Sanitize incoming data
  const parsed = mediaSchema.safeParse(data);

  if (!parsed.success) {
    return {
      parseError: parsed.error.flatten().fieldErrors,
      success: false,
      message: "Schema validation failed",
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
    revalidatePath("/dashboard/locations/all/**");
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

export async function saveMemory(data: unknown) {
  // Auth check
  const { isAuthenticated, getUser } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    throw new Error("Unauthorized");
  }
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const parsed = memorySchema.safeParse(data);
  if (!parsed.success) {
    return {
      formError: parsed.error.flatten().fieldErrors,
      success: false,
      message: "Schema validation failed.",
    };
  }

  const {
    city,
    country,
    countryCode,
    durationUnit,
    durationValue,
    latitude,
    location,
    longitude,
    notes,
    tags,
    visitedOn,
  } = parsed.data;

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
  await prisma.tripLog.create({
    data: {
      city,
      country,
      countryCode,
      duration: `Unit - ${durationUnit}  Value - ${durationValue}`,
      latitude,
      longitude,
      visitedOn,
      notes,
      tags,
      location,
      userId: tenantUser.id,
    },
  });
  revalidatePath("/dashboard/locations");
  return {
    success: true,
    message: "Memory saved",
  };
}

// Save image (Currently not implemented, placeholder)
export async function DeleteTripLog({ tripId }: { tripId: string }) {
  // validate the trip id
  const tripExist = await prisma.tripLog.findUnique({
    where: {
      id: tripId,
    },
  });
  if (!tripExist) {
    return {
      success: false,
      message: "Trip log does not exist",
    };
  }

  await prisma.tripLog.delete({
    where: {
      id: tripId,
    },
  });

  revalidatePath("/dashboard/locations/all");
  return {
    success: true,
    message: "Deleted",
  };
}
