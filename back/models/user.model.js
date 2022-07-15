import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
      },
      address: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true
      },
      hash_password: {
        type: String
      },
      isAdmin: {
        type: Boolean,
        default: false
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      created: {
        type: Date,
        default: Date.now
      }
});

export default mongoose.model('User', userSchema);