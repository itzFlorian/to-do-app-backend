import mongoose from "mongoose";
const taskSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date
  },
  done:{
    type:Boolean
  }
});

const Task = mongoose.model("Task", taskSchema);
export default Task