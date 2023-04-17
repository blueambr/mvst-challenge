import { Schema, model, models } from "mongoose";

const TeaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Tea = models.Tea || model("Tea", TeaSchema, "tea");

export default Tea;
