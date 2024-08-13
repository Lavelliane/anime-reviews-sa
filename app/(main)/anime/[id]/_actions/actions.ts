"use server";

import { ReviewSchema } from "@/schemas/ReviewSchema";
import z from "zod";
import { createServerAction } from "zsa";

export const createReviewAction = createServerAction()
        .input(ReviewSchema)
        .output(z.object({ }))
        .handler(async ({ input }) => {
            
        })
