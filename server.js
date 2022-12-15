import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import taskRouter from "./src/routes/taskRoute.js";

const PORT = process.env.PORT || 4000;
const URI = process.env.URI || "mongodb://localhost:27017/test";

// initialize express
const app = express();

// set middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// set routes
app.use("/",taskRouter);
// set mongoose
mongoose.connect(URI, () => {
  console.log("DB-Connected");
  (err) => {
    console.error(err);
  };
});

// set express on PORT
app.listen(PORT, () => {
  console.log("Server listen on PORT: " + PORT);
});
