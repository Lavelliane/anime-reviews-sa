"use server";

import { ReviewSchemaAction } from "@/schemas/ReviewSchema";
import { revalidateTag } from "next/cache";
import z from "zod";
import { createServerAction } from "zsa";

export const createReviewAction = createServerAction()
  .input(ReviewSchemaAction)
  .output(z.object({ success: z.boolean() }))
  .handler(async ({ input }) => {
    await fetch(`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}/api/reviews`, {
      method: "POST",
      body: JSON.stringify({ data: input }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("anime");
    return { success: true };
  });
