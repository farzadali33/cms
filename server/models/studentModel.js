import mongoose from "mongoose";
const currSubjectsSchema = new mongoose.Schema({
  subject: { type: String, ref: "Subject" },
  mid: Number,
  final: Number,
  sessional: Object,
  totalMarks: Number,
  grade: String,
  instructor: String,
});
const studentsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
      trim: true,
    },
    rollNumber: {
      type: String,
      required: [true, "Please enter roll number"],
      unique: true,
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: [true, "Please enter registration number"],
      unique: true,
      trim: true,
    },
    dob: {
      type: String,
      required: [true, "Please enter date of birth"],
    },
    _class: {
      type: String,
      required: [true, "Please enter class"],
      trim: true,
    },
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
        message: "Gender can be male of female",
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
    semester: {
      type: Number,
      required: [true, "Please enter current semester"],
      min: [1, "Valid semester range is 1 to 8"],
      max: [8, "Valid semester range is 1 to 8"],
    },
    session: {
      type: String,
      required: [true, "Please enter session"],
      trim: true,
    },
    currentSemesterSubjects: { type: Array },

    currentSemesterSubjectsInfo: [currSubjectsSchema],
    transcript: {
      type: Object,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    versionKey: false,
  }
);
studentsSchema.virtual("GPA", function () {
  return this.grades.reduce((a, b) => a + b, 0);
});
//3rd argument is collection's name
// studentsSchema.pre(/^find/,function(next){
//   this.populate(this.find(currentSemesterSubjectsInfo));
// })
var Student = mongoose.model("Student", studentsSchema, "students");

export default Student;
