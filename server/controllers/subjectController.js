import express from "express";
import mongoose from "mongoose";

import Subject from "../models/subjectModel.js";

const router = express.Router();
//CRUD Subject
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getSubject = async (req, res) => {
  const { id } = req.params;

  try {
    const subject = await Subject.findById(id);

    res.status(200).json(subject);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSubject = async (req, res) => {
  try {
    const newSubject = await Subject.create(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateSubject = async (req, res) => {
  const { id } = req.params;
  const { name, rollNumber, dob, _class } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No subject with id: ${id}`);

  const updatedSubject = { name, rollNumber, dob, _class, _id: id };

  await Subject.findByIdAndUpdate(id, updatedSubject, { new: true });

  res.json(updatedSubject);
};

export const deleteSubject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No subject with id: ${id}`);

  await Subject.findByIdAndRemove(id);

  res.json({ message: "Subject deleted successfully." });
};
export default router;
