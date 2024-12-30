import {z} from 'zod'

export const CategoryFormSchema = z.object({
    name: z.string()
    .min(6,"Minimal 6 Karakter")
    .trim(),
    description: z.string()
    .min(6,"Minimal 20 Karakter")
    .trim()
})