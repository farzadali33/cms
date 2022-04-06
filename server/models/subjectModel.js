import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title of the course"],
      trim: true,
    },
    _id: {
      type: String,
      required: [true, "Please enter course code"],
    },
    creditHours: {
      type: Number,
      required: [true, "Please enter credit Hours"],
      min: [1, "Please enter credit hour in the range 1 - 3"],
      max: [3, "Please enter credit hour in the range 1 - 3"],
    },
  },
  { versionKey: false }
);
//3rd argument is collection's name
var Subject = mongoose.model("Subject", subjectsSchema, "subjects");

export default Subject;
