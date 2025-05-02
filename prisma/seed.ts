import prisma from "@/lib/prisma";

async function main() {
  const newUser = await prisma.user.upsert({
    where: {
      tenantId: "tes1",
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

  await prisma.travelLog.upsert({
    where: {
      userId: newUser.id, // Changed from tenantId to the user's id
    },
    update: {
      date: new Date(), // Changed from Date to date (Prisma usually uses lowercase)
      latitude: "27.133662",
      longitude: "81.963219",
      tags: ["Best Places in Gondia District", "Top 10 best places in gondia"],
      notes: "test notes",
      mediaFiles: [
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/1016/800/600",
        "https://picsum.photos/id/1020/800/600",
        "https://picsum.photos/id/1024/800/600",
        "https://picsum.photos/id/1035/800/600",
      ],
      location: "gondia, maharashtra, india",
    },
    create: {
      date: new Date(), // Changed from Date to date
      userId: newUser.id, // Using the newly created user's id
      latitude: "27.133662",
      longitude: "81.963219",
      tags: ["Best Places in Gondia District", "Top 10 best places in gondia"],
      notes: "test notes",
      mediaFiles: [
        "https://picsum.photos/id/1015/800/600",
        "https://picsum.photos/id/1016/800/600",
        "https://picsum.photos/id/1020/800/600",
        "https://picsum.photos/id/1024/800/600",
        "https://picsum.photos/id/1035/800/600",
      ],
      location: "gondia, maharashtra, india",
    },
  });
}

main()
  .then(() => console.log("db seeded"))
  .catch((e: Error) => console.error(e?.message));
