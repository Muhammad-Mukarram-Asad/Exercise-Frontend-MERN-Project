import { Router } from "express";
import { createWorkout, getAllWorkouts, getSingleWorkout, updateWorkout, deleteWorkout } from "../controllers/workout.controller.js";
const router = Router();

// Add new workout controller below:
router.post("/", createWorkout)

// Get All Workouts controller below:
router.get("/", getAllWorkouts);

// Get Single Workout controller below:
router.get("/:id", getSingleWorkout);

// Update a single workout:
router.patch("/:id", updateWorkout);

// Delete a single workout:
router.delete("/:id", deleteWorkout);

export default router;
