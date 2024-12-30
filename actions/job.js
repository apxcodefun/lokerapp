'use server'
import { JobsFormSchema } from "@/utils/jobsSchema";
import connectDB from "@/configs/database";
import Jobs from "@/models/job";
import { redirect } from "next/navigation"
import { auth, currentUser } from '@clerk/nextjs/server'

export async function jobCreate(stateData, formData) {
    // Validate form fields
    await connectDB();
    const validateFields = JobsFormSchema.safeParse({
        category: formData.get("category"),
        title: formData.get("title"),
        jobType: formData.get("jobType"),
        isPublish: formData.get("isPublish") === 'on' ? true : false,
        remote: formData.get("remote") === 'on' ? true : false,
        benefit: formData.get("benefit"),
        requirements: formData.get("requirements"),
        city: formData.get("city"),
        state: formData.get("state"),
        companyName: formData.get("companyName"),
        address: formData.get("address"),
        contactPhone: formData.get("contactPhone"),
        contactEmail: formData.get("contactEmail"),
        salary: parseInt(formData.get("salary")),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
        }
    }

    // Get ID Current USer (Clerk)
    const { userId } = await auth()

    const { category, title, jobType, isPublish, salary, remote, requirements, benefit, city, state, address, companyName, contactEmail, contactPhone } = validateFields.data

    try {
        const newJobs = new Jobs({
            category, title, jobType, isPublish, salary, remote, requirements, benefit, city, state, address, companyName, contactEmail, contactPhone, clerkId: userId
        })
        await newJobs.save();
    } catch (e) {
        console.log(e)
    }
    redirect('/dashboard/jobs')
}

export async function jobEdit(stateId, formData) {
    // Validate form fields
    await connectDB();
    const validateFields = JobsFormSchema.safeParse({
        category: formData.get("category"),
        title: formData.get("title"),
        jobType: formData.get("jobType"),
        isPublish: formData.get("isPublish") === 'on' ? true : false,
        remote: formData.get("remote") === 'on' ? true : false,
        benefit: formData.get("benefit"),
        requirements: formData.get("requirements"),
        city: formData.get("city"),
        state: formData.get("state"),
        companyName: formData.get("companyName"),
        address: formData.get("address"),
        contactPhone: formData.get("contactPhone"),
        contactEmail: formData.get("contactEmail"),
        salary: parseInt(formData.get("salary")),
    })

    if (!validateFields.success) {
        return {
            errors: validateFields.error.flatten().fieldErrors,
        }
    }

    // Get ID Current USer (Clerk)
    const { userId } = await auth()

    const { category, title, jobType, isPublish, salary, remote, requirements, benefit, city, state, address, companyName, contactEmail, contactPhone } = validateFields.data

    const existingJob = await Jobs.findById(stateId)

    if (existingJob.clerkId != userId) {
        return {
            error: 'Anda tidak dapat memodifikasi data ini.'
            }
        }

    await Jobs.findByIdAndUpdate(stateId, {
        category, title, jobType, isPublish, salary, remote, requirements, benefit, city, state, address, companyName, contactEmail, contactPhone, clerkId: userId
    })

    redirect('/dashboard/jobs')
}


export async function jobDelete(jobId) {
    await connectDB();
    const { userId } = await auth();
    const existingJob = await Jobs.findById(jobId);


    if (existingJob.clerkId !== userId) {
        console.error("User tidak punya hak untuk menghapus data ini.");
        return {
            error: 'Anda tidak punya hak untuk menghapus data ini.'
        };
    }

    await Jobs.findByIdAndDelete(jobId);
    redirect('/dashboard/jobs');
}

