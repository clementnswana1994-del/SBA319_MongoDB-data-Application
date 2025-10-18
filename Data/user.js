import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    // readytoSend: {
    //     type: Boolean,
    //     default: true
    // }
})

const User = mongoose.model('user', userSchema, 'users')

export default User