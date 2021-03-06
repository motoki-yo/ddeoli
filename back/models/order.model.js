import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        trim: true,
        required: true
      },
      items: [{
        type: String,
        required: true
      }],
    totalPrice: {
        type: Number,
        required: true
      },
    orderAddress:{
      type: String,
      required: true
    },
    created: {
        type: Date,
        default: Date.now
      }
});

export default mongoose.model('Order', orderSchema);