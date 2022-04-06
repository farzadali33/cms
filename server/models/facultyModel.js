import mongoose from "mongoose";
// const currSubjectsSchema = new mongoose.Schema({
//   subject: { type: String, ref: "Subject" },
//   mid: Number,
//   final: Number,
//   sessional: Object,
//   totalMarks: Number,
//   grade: String,
//   instructor: String,
// });
const facultySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
      trim: true,
    },

    dob: {
      type: String,
      required: [true, "Please enter date of birth"],
    },
    // classes: {
    //   type: String,
    //   required: [true, "Please enter class"],
    //   trim: true,
    // },
    fatherName: {
      type: String,
      required: [true, "Please enter father name"],
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
      enum: {
        values: ["male", "female"],
        message: "Gender can be either male of female",
      },
    },
    email: {
      type: String,
      required: [true, "Please enter class"],
      trim: true,
    },
    address1: {
      type: String,
      required: [true, "Please enter address"],
      trim: true,
    },
    address2: {
      type: String,
      trim: true,
    },
    zipCode: {
      type: Number,
      required: [true, "Please enter zip code"],
    },
    city: {
      type: String,
      required: [true, "Please enter city"],
      trim: true,
    },
    country: {
      type: String,
      required: [true, "Please enter country"],
      trim: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);
// facultySchema.virtual("GPA", function () {
//   return this.grades.reduce((a, b) => a + b, 0);
// });
//3rd argument is collection's name
// facultySchema.pre(/^find/,function(next){
//   this.populate(this.find(currentSemesterSubjectsInfo));
// })
var Faculty = mongoose.model("Faculty", facultySchema, "faculty");

export default Faculty;
