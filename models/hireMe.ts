import mongoose, { models, Document } from "mongoose";

export interface IHireMe extends Document {
  name: string;
  email: string;
  serviceType: string;
  message: string;
}

const HireMeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const HireMe =
  models.HireMe || mongoose.model<IHireMe>("HireMe", HireMeSchema);
