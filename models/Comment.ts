import mongoose, { Schema, models, model } from "mongoose";

const CommentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Comment || model("Comment", CommentSchema);
