import mongoose from "mongoose";
const {Schema, models, model} = mongoose
import { JOB_TYPE } from "@/utils/constats";

const jobSchema = new Schema ({
    jobType: {
        type: String,
        enum : Object.values(JOB_TYPE),
        default:JOB_TYPE.FULLTIME
    },
    isPublish : {
        type: Boolean,
        default: true,
    },
    title : {
        type: String,
        required: true,
    },
    salary : {
        type: Number,
        required: true,
    },
    category : {
        type: mongoose.Types.ObjectId,
        ref: 'Categories',
    },
    remote : {
        type: Boolean,
        default: false,
    },
requirements : {
        type: String,
        required: true,
    },
    benefit : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
    city : {
        type: String,
        required: true,
    },
    state : {
        type: String,
        required: true,
    },
    companyName :{
        type: String,
        required: true,
    },
    contactPhone : {
        type: String,
        required: true,
    },
    contactEmail : {
        type: String,
        required: true,
    },
    clerkId: {
        type: String,
        required : true,
    },

},{
    timestamps: true,
})

const Jobs = models.Jobs || model("Jobs", jobSchema)
export default Jobs;