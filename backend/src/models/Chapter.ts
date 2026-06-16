import mongoose, { Document, Schema } from "mongoose";

export interface IChapter extends Document {
  title: string;
  course: mongoose.Types.ObjectId;
  order: number;
  videos: mongoose.Types.ObjectId[];
  notes: mongoose.Types.ObjectId[];
  tests: mongoose.Types.ObjectId[];
}

const chapterSchema = new Schema<IChapter>(
  {
    title: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    order: { type: Number, required: true },
    videos: [{ type: Schema.Types.ObjectId, ref: "Video" }],
    notes: [{ type: Schema.Types.ObjectId, ref: "Notes" }],
    tests: [{ type: Schema.Types.ObjectId, ref: "Test" }],
  },
  { timestamps: true }
);

export default mongoose.model<IChapter>("Chapter", chapterSchema);