import {z} from 'zod'

export const ApplyJobSchema = z.object({
  profile: z.string().refine((value) => value.length === 24, {message: 'Harus ID Profile yang Valid'}).optional(),
  job: z.string().refine((value) => value.length === 24, {message: 'Harus ID Pekerjaan yang Valid'}).optional(),
  message: z.string().min(10, 'Minimal 10 karakter').trim(),
  status: z.enum(['pending', 'interview', 'rejected']),
});
