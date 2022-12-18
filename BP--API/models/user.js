const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the Schema is a format for how data will be stored in our database.
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      //define what type of data
      type: String,
      //throws and error if a user is not present when we try to store a user
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    reset_code: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//export the model
module.exports = mongoose.model("User", userSchema);
