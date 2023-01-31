const User = require("../models/user");

module.exports = {
	create: (req, res) => {
		const userName = req.body.userName;
		const uid = req.body.uid;
		const newUser = new User({
			userName,
			uid,
		});
		newUser.save();
	},
	//when we are trying to reach/use the remove we have to pass the object as data to the property
	//ex API.removeUser({ data:  uid: currentUser.uid });

	remove: (req, res) => {
		User.deleteOne({ uid: req.body.uid })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},

	getUser: (req, res) => {
		User.find({ uid: req.params.uid })
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},

	getAllUsers: (req, res) => {
		User.find(req.query)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(400).json(err));
	},

	//create update route
	update: (req, res) => {
		//pass unique property and set value to true
		if (req.body.updatingUserName === true) {
			console.log("updating user name funciton fireing");
			User.findOneAndUpdate(
				//where its going to find user name
				{ uid: req.body.uid },
				//replace value with new value, add to set pushes new value to existing data
				{ $set: { userName: req.body.name } }
			)
				.then((dbModel) => res.json(dbModel))
				.catch((err) => res.status(400).json(err));
		}
	},
};
