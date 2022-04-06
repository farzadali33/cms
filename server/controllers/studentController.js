import express from "express";
import mongoose from "mongoose";

import Student from "../models/studentModel.js";

const router = express.Router();
//CRUD Student
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate(
      "currentSemesterSubjectsInfo.subject"
    );
    // res.status(200).json({ status: "success", data: { students } });
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const filterStudents = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b=(gte|gt|lte|lt)\b/g,
      (match) => "$${match}"
    );
    const query = Student.find(JSON.parse(queryStr));
    const filteredStudents = await query;

    res.status(200).json({ status: "success", data: { filteredStudents } });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const sortStudents = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(
      /\b=(gte|gt|lte|lt)\b/g,
      (match) => "$${match}"
    );
    let query = Student.find(JSON.parse(queryStr));
    if (req.query.sort) {
      query = query.sort(req.query.sort);
    } else {
      query = query.sort("rollNumber");
    }
    const sortedStudents = await query;

    res.status(200).json({ status: "success", data: { sortedStudents } });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const student = await Student.findById(id);

    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, rollNumber, dob, _class } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No student with id: ${id}`);

  const updatedStudent = { name, rollNumber, dob, _class, _id: id };

  await Student.findByIdAndUpdate(id, updatedStudent, { new: true });

  res.json(updatedStudent);
};

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No student with id: ${id}`);

  await Student.findByIdAndRemove(id);

  res.json({ message: "Student deleted successfully." });
};
export default router;
