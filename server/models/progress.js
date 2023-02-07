const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//the Schema is a format for how data will be stored in our database.
const progressSchema = new Schema(
	{
		courseProgress: {
			//this could be an array too i guess, we can push the current route and then compare the length?
			type: Number,
		},
		sectionName: {
			type: String,
		},
		currentScore: {
			type: Number,
		},
		previousScore: {
			type: Number,
		},
		user: {
			type: mongoose.Schema.ObjectId,
			ref: "User",
			required: true,
		},
	},
	{
		timestamps: true,
	}
	//this is reference to our user model which already exists in the database
);

//export the model
module.exports = mongoose.model("Progress", progressSchema);
