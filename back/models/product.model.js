import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
      },
    description: {
        type: String,
        trim: true,
        required: true
      },
    group: {
        type: String,
        trim: true,
        required: true
      },
    img: {
        type: String,
        trim: true,
      },
    price: {
        type: Number,
        required: true
      },
    qtyInInventory: {
        type: Number,
        default: 0,
        required: true
      },

    created: {
        type: Date,
        default: Date.now
      }
});

export default mongoose.model('Product', productSchema);