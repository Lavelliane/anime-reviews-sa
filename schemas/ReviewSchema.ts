import { z } from 'zod'

export const ReviewSchema = z.object({
    title: z.string().trim(),
    body: z.string().trim().min(10, { message: "Body must be at elast 10 characters long" }),
    rating: z.coerce.number(),
    author: z.string(),
})

export const ReviewSchemaAction = ReviewSchema.extend({
    anime: z.number(),
});