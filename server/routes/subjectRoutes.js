import express from "express";
import {
  getSubjects,
  getSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} from "../controllers/subjectController.js";

const router = express.Router();
router.get("/Subjects", getSubjects);
router.post("/Subject", createSubject);
router.get("/Subject", getSubject);
router.patch("/Subject", updateSubject);
router.delete("/Subject", deleteSubject);

export default router;
