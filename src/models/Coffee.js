import { Schema, model, models } from "mongoose";

const CoffeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
  },
});

const Coffee = models.Coffee || model("Coffee", CoffeeSchema, "coffee");

export default Coffee;
