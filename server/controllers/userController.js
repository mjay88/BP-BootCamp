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
};
