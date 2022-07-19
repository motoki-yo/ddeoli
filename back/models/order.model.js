import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    id: {
        type: String,
        trim: true,
        required: true
      },
    dateInvoice: {
        type: Date,
      },
    userEmail: {
        type: String,
        trim: true,
        required: true
      },
    items: {
        type: String,
        trim: true,
      },
    totalPrice: {
        type: Number,
        required: true
      },
    created: {
        type: Date,
        default: Date.now
      }
});

export default mongoose.model('Order', orderSchema);