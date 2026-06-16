import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  class: string; // "6", "7", ..., "12", "BSc"
  description: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  chapters: mongoose.Types.ObjectId[];
  isPublished: boolean;
}

const courseSchema = new Schema<ICourse>(
  {
    title: { type: String, required: true },
    class: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: Number,
    chapters: [{ type: Schema.Types.ObjectId, ref: "Chapter" }],
    isPublished: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<ICourse>("Course", courseSchema);