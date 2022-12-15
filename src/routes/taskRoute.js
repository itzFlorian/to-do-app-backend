import express from "express";
import {
  deleteOne,
  getAll,
  postOne,
  updateOne,
} from "../controller/taskController.js";

// set userRouter
const taskRouter = express.Router();

// set routes in root
taskRouter
  .route("/")
    .get(getAll)
    .post(postOne)
    .patch(updateOne)
    .delete(deleteOne);

export default taskRouter;