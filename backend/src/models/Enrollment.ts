import mongoose, { Document, Schema } from "mongoose";

export interface IEnrollment extends Document {
  student: mongoose.Types.ObjectId;
  course: mongoose.Types.ObjectId;
  payment: mongoose.Types.ObjectId;
  progress: {
    videoId: mongoose.Types.ObjectId;
    watched: boolean;
  }[];
  completed: boolean;
}

const enrollmentSchema = new Schema<IEnrollment>(
  {
    student: { type: Schema.Types.ObjectId, ref: "User", required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course", required: true },
    payment: { type: Schema.Types.ObjectId, ref: "Payment", required: true },
    progress: [
      {
        videoId: { type: Schema.Types.ObjectId, ref: "Video" },
        watched: { type: Boolean, default: false },
      },
    ],
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IEnrollment>("Enrollment", enrollmentSchema);