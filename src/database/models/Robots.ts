import { Schema, model } from "mongoose";

const robotSchema = new Schema({
  name: { type: String, required: true },
  image: String,
  speed: Number,
  resilience: Number,
  creationDate: String,
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
