import Workout from "../models/workoutSchema.js";
import mongoose from "mongoose";

// Create a new workout
export const createWorkout = async (req, res) => {

  let emptyField = [];
  // Add doc to db
  const { title, reps, load } = req.body;
  if (!title) {
    emptyField.push("title");
  }

  if (!reps) {
    emptyField.push("reps");
  }
  if (!load) {
    emptyField.push("load");
  }

  if(emptyField.length > 0)
  {
    const error = {
      message: `Please fill all the fields`,
      emptyField: emptyField
    }
    return res.status(400).json(error);
  }
  try {
    const workout = new Workout({ title, reps, load });
    await workout.save();
    res
      .status(200)
      .json({ message: "Workout created successfully", workout: workout });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Workouts:
export const getAllWorkouts = async (req, res) => {
  try {
    const allWorkouts = await Workout.find({}).sort({ createdAt: -1 }); // Descending Order
    res.status(200).json(allWorkouts);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single workout:

export const getSingleWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: "Workout not found due to In-valid ID" });
    }
    const singleWorkout = await Workout.findById(id);
    res
      .status(200)
      .json({ message: "get Single Workout Successfully", singleWorkout });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a single workout:
export const updateWorkout = async (req, res) => {
  const { title, reps, load } = req.body;
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: "Workout not found due to In-valid ID" });
    }

    const updatedWorkout = await Workout.findByIdAndUpdate(
      id,
      { title, reps, load },
      { new: true }
    );
    if (!updatedWorkout) {
      return res.status(400).json({ message: "Workout not found" });
    }
    res
      .status(200)
      .json({ message: "Update Single Workout Successfully", updatedWorkout });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a single workout:

export const deleteWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res
        .status(404)
        .json({ message: "Workout not found due to In-valid ID" });
    }

    const deleteWorkout = await Workout.findByIdAndDelete(id);
    if (!deleteWorkout) {
      return res.status(400).json({ message: "Workout not found" });
    }
    res
      .status(200)
      .json({ message: "Delete Single Workout Successfully", deleteWorkout });
  } catch (error) {
    res.status(400).json({ message: error.messae });
  }
};
