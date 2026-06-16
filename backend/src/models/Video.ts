import mongoose, { Document, Schema } from "mongoose";

export interface IVideo extends Document {
  title: string;
  chapter: mongoose.Types.ObjectId;
  videoUrl: string; // Cloudinary / Bunny Stream URL
  duration: number; // in minutes
  order: number;
}

const videoSchema = new Schema<IVideo>(
  {
    title: { type: String, required: true },
    chapter: { type: Schema.Types.ObjectId, ref: "Chapter", required: true },
    videoUrl: { type: String, required: true },
    duration: { type: Number, required: true },
    order: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IVideo>("Video", videoSchema);