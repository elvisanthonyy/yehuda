import mongoose, { models, Document } from "mongoose";

export interface IBeat extends Document {
  name: string;
  imageUrl: string;
  audioUrl: string;
}

const BeatSchema = new mongoose.Schema<IBeat>(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    audioUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Beat = models.Beat || mongoose.model<IBeat>("Beat", BeatSchema);
