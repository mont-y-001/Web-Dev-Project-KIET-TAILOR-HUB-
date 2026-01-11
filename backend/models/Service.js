import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    image: {
      type: String, // Supabase public image URL
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt automatically
  }
);

export default mongoose.model("Service", ServiceSchema);
