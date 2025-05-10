import * as z from "zod";

export const memorySchema = z.object({
  country: z
    .string()
    .min(2, "Country name is required")
    .max(100, "Country name is too long")
    .trim(),
  countryCode: z
    .string()
    .min(2, "countryCode is required")
    .max(20, "countryCode is too long")
    .trim(),
  city: z
    .string()
    .min(2, "City is required")
    .max(150, "City is too long")
    .trim(),

  durationValue: z
    .string()
    .min(1, "Duration Value is required")
    .max(150, "Duration Value is too long")
    .trim(),
  durationUnit: z
    .string()
    .min(1, "Duration Unit is required")
    .max(150, "Duration Unit is too long")
    .trim(),

  location: z
    .string()
    .min(2, "Location is required")
    .max(250, "Location is too long")
    .trim(),

  visitedOn: z.coerce.date().refine((date) => date <= new Date(), {
    message: "Visited date can't be in the future",
  }),

  notes: z
    .string()
    .min(5, "Notes must be at least 5 characters")
    .max(1000, "Notes can't exceed 1000 characters")
    .trim(),

  tags: z
    .array(z.string().min(1, "Tag must have at least 1 character").max(50))
    .min(1, "At least one tag is required")
    .max(10, "You can only add up to 10 tags"),

  latitude: z
    .string({ invalid_type_error: "Latitude is required" })
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),
  longitude: z
    .string({ invalid_type_error: "Longitude is number" })
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),
});

export type MemorySchema = z.infer<typeof memorySchema>;
const MEDIA_FILE_TYPES = ["VIDEO", "IMAGE"] as const;

export const MediaFileEnum = z.enum(MEDIA_FILE_TYPES, {
  description: "Type of media file (VIDEO or IMAGE)",
});

export const mediaSchema = z.object({
  url: z.string().min(1, { message: "Media url is required" }),
  mediaFileType: MediaFileEnum.describe("Type of media content"),
  tripLogId: z.string().min(1, { message: "Trip Log id is required" }),
  fileId: z.string().min(1, { message: "File id is required" }),
  fileSize: z.string().min(1, { message: "File size is required" }),
});

export type MediaSchema = z.infer<typeof mediaSchema>;

// Contact us page
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be within 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  subject: z.string().min(1, { message: "Subject is required" }).max(100, {
    message: "Subject must be within 100 characters",
  }),
  message: z.string().min(1, { message: "Message is required" }).max(250, {
    message: "Message must be within 250 characters.",
  }),
});
export type ContactSchema = z.infer<typeof contactSchema>;
