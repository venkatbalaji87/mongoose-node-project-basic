const mongoose = require("mangoose");

const { Schema } = mongoose;

const authorSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  field_of_study: {
    type: String,
    enum: ["fiction", "non-fiction"]
  },
  date_of_birth: Date,
  date_of_death: Date
});
