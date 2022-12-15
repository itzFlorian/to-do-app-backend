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

export default mongoose.model("Task", taskSchema);