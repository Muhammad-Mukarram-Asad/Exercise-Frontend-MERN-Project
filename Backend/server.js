// const express = require("express");
// require("dotenv").config();
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import workoutRoutes from "./routes/workouts.js";
import cors from "cors";
dotenv.config();

const allowedOrigins = [
  "https://mern-stack-exercise-project.netlify.app/"
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // Allow requests with no origin like mobile apps, curl, etc.
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  //   credentials: true,  If you need to send cookies or authentication headers
  Credential: false,
};

app.use(cors(corsOptions));

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  // console.log(req.path, req.method); // A sample middleware for teaching next();
  next();
});

app.use("/api/workouts", workoutRoutes);

// Connect to DB

async function main() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    if (connection) {
      console.log("Connected to DB");
      app.listen(process.env.PORT, () => {
        console.log("Server is listening on port " + process.env.PORT);
      });
    }
  } catch (error) {
    console.log("error => ", error);
  }
}

main();
