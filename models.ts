import * as z from "zod";

export const memorySchema = z.object({
  location: z.string().min(1, "Required").max(250).trim(),
  date: z.coerce
    .date()
    .refine((date) => date <= new Date(), "Can't be future date"),
  notes: z.string().min(1, "Required").max(500).trim(),
  tags: z
    .array(z.string().min(1).max(50))
    .min(1, "Need at least 1 tag")
    .max(10),
  mediaFiles: z.array(z.string().url()).max(20).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
});

export type MemorySchema = z.infer<typeof memorySchema>;
