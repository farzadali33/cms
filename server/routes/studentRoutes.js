import express from "express";
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();
router.get("/Students", getStudents);
router.post("/Student", createStudent);
router.get("/Student", getStudent);
router.patch("/Student", updateStudent);
router.delete("/Student", deleteStudent);

export default router;
