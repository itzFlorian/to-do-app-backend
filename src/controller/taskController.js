import Task from "../models/taskModel.js";

export const getAll = async (req, res) => {
  try {
    res.status(200).send(await Task.find());
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

export const postOne = async (req, res) => {
  try {
    const newTask = await Task.create(req.body)
    res.status(201).send(newTask);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

export const updateOne = async (req, res) => {
  try {
    const {id,done} = req.body
    const update = await Task.findByIdAndUpdate(id, {done}, {new:true, runValidators:true})
    res.status(201).send(update);
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

export const deleteOne = async (req, res) => {
  try {
    res.status(200).send(await Task.findByIdAndDelete(req.body.id));
  } catch (error) {
    res.status(404).send({ message: error });
  }
};
