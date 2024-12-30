import { z } from 'zod'
import { JOB_TYPE } from './constats'

export const JobsFormSchema = z.object({
    jobType: z.enum(Object.values(JOB_TYPE)),

    isPublish: z.boolean(),

    title: z.string().min(6, 'Minimal 6 karakter').max(100, 'Maksimal 100 karakter').trim(),

    salary: z.number().min(100000, 'Minimal 100.000').max(10000000, 'Maksimal 10.000.000').positive(),

    remote : z.boolean(),

    category: z.string().min(6, 'Minimal 6 karakter').max(100, 'Maksimal 100 karakter').trim(),

    requirements: z.string().min(6, "Masukkan Skill yang dibutuhkan").trim(),

    benefit: z.string().min(6, 'Masukkan Kelebihan yang diberikan').trim(),

    address: z.string().min(6, 'Masukkan alamat Loker').trim(),

    city: z.string().min(3, 'Minimal 3 karakter').max(100, 'Maksimal 100 karakter').trim(),

    state: z.string().min(2, 'Minimal 2 karakter').max(100, 'Maksimal 100 karakter').trim(),

    companyName: z.string().min(6, 'Minimal 6 karakter').max(100, 'Maksimal 100 karakter').trim(),

    contactPhone: z.string().min(4, 'Minimal 10 karakter').trim(),

    contactEmail: z.string().email({ message: "Harap Masukkan email Yang Benar" }),

})