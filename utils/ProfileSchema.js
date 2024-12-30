import { z } from "zod";

export const ProfileSchemaForm = z.object({
  firstName: z.string().min(2, "Nama depan minimal 2 karakter").trim(),
  lastName: z.string().min(2, "Nama belakang masak singkat x").trim(),
  biodata: z.string().min(20, "Minimal 20 Karakter").trim(),
  linkedin: z.string().url({ message: "Harus Format link" }),
  portfolio: z.string().url({ message: "Harus Format link" }),
});
