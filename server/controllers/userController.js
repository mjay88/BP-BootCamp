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
};
