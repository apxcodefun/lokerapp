import mongoose from "mongoose";
const {Schema, models, model} = mongoose

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        min : [6, "Minimal 6 Karakter"]
    },
    description: {
        type: String,
        required: true
    }
}, {
    toJSON: {virtuals: true}, toObject: {virtuals: true}
})

CategorySchema.virtual("JobList",{
    ref: "Jobs",
    localField: "_id",
    foreignField: "category",
    justOne: false
})


const Categories = models.Categories || model("Categories", CategorySchema)

export default Categories;