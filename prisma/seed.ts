import prisma from "@/lib/prisma";

async function main() {
  await prisma.$transaction(async (tsx) => {
    const user = await tsx.user.upsert({
      where: {
        tenantId: crypto.randomUUID(),
      },
      create: {
        name: "test1",
        email: "test1@gmail.com",
        picture: "",
        role: "USER",
        tenantId: "tes1",
      },
      update: {
        name: "test1",
        email: "test1@gmail.com",
        picture: "",
        role: "USER",
        tenantId: "tes1",
      },
    });

    // Create TripLog with media files and tags
    const tripLog = await tsx.tripLog.create({
      data: {
        country: "India",
        countryCode: "IN",
        city: "Gondia",
        location: "Gondia, Maharashtra, India",
        latitude: "27.133662",
        longitude: "81.963219",
        visitedOn: new Date(),
        duration: "1.5 days",
        notes: "test notes",
        user: {
          connect: {
            id: user?.id,
          },
        },
        tags: [
          "Best Places in Gondia District",
          "Top 10 best places in gondia",
        ],
        mediaFiles: {
          create: [
            {
              url: "https://picsum.photos/id/1015/800/600",
              mediaType: "IMAGE",
            },
            {
              url: "https://picsum.photos/id/1016/800/600",
              mediaType: "IMAGE",
            },
            {
              url: "https://picsum.photos/id/1020/800/600",
              mediaType: "IMAGE",
            },
            {
              url: "https://picsum.photos/id/1024/800/600",
              mediaType: "IMAGE",
            },
            {
              url: "https://picsum.photos/id/1035/800/600",
              mediaType: "IMAGE",
            },
          ],
        },
      },
    });

    console.log("TripLog created with ID:", tripLog.id);
  });
}

main()
  .then(() => console.log("DB seeded successfully"))
  .catch((e: Error) => {
    console.error("Seed failed:", e.message);
    process.exit(1);
  });
