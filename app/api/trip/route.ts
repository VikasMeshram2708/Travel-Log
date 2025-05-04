import prisma from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";
import assert from "node:assert";

import * as z from "zod";

const deleteSchema = z.object({
  tripId: z.string().min(1, { message: "Trip Id is required" }),
});

export async function DELETE(request: NextRequest) {
  try {
    // auth check
    const { isAuthenticated, getUser } = getKindeServerSession();
    if (!(await isAuthenticated())) {
      throw new Error("Un-Authorized");
    }
    const user = await getUser();
    assert.ok(user, "User not found. Un-authorized");
    const body = await request.json();
    // console.log("incd", body);

    // sanitize the incoming data

    const parsed = deleteSchema.safeParse(body);

    if (!parsed.success) {
      const formError = parsed.error.flatten().fieldErrors;
      return new Response(JSON.stringify(formError), {
        status: 422,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    assert.ok(parsed.success, "Schema validation failed");
    const { tripId } = parsed.data;
    const record = await prisma.tripLog.delete({
      where: {
        id: tripId,
        user: {
          email: user?.email as string,
        },
      },
    });

    assert(record.id, "Record Deletion failed");
    if (!record.id) {
      return new Response(JSON.stringify("Deletion failed try again"), {
        status: 422,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    revalidatePath("/dashboard/**");
    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    const err = e as unknown as Error;
    console.error(e);
    return new Response(JSON.stringify(err?.message), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
