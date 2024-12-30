import mongoose from 'mongoose';

const {Schema, models, model} = mongoose

const ProfileSchema = new Schema({
    firstName :{
        type:String,
        required: true
    },
    lastName :{
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    biodata : {
        type:String,
        required: true
    },
    role :{
        type: String,
        enum : ['admin', 'user'],
        default: 'user'
    },
    portfolio : {
        type: String,
        required: true
    },
    linkedin : {
        type: String,
        required: true
    },
    clerkId : {
        type: String,
        required : true,
    }
})

const Profile = models.Profile || model('Profile', ProfileSchema)
export default Profile;