//all the logic that goes behind the endpoint is in the controller, basically just to make it easier to read
require("dotenv").config();
// // const User = require("../models/Users");
// const bcrypt = require("bcryptjs");
// const validateRegisterInput = require("../validation/registerValidation");
// const jwt = require("jsonwebtoken");
// const requiresAuth = require("../middleware/permissions");
// const { token } = require("morgan");
// const requiresAuth = require("../middleware/permissions");

const test = async (req, res) => {
  res.send("Auth route working!");
};

const register = async (req, res) => {
  //   try {
  //     console.log("BODYYYYYYY", req);
  //     const { errors, isValid } = validateRegisterInput(req.body);
  //     if (!isValid) {
  //       return res.status(400).json(errors);
  //     }
  //     //check for existing user, case sensitive, .findOne is a mongodb function that returns one document that meets our criteria
  //     const existingEmail = await User.findOne({
  //       //checks for uppercase lowercase, which is brilliant
  //       email: new RegExp("^" + req.body.email + "$", "i"),
  //     });
  //     if (existingEmail) {
  //       return res
  //         .status(400)
  //         .json({ error: "There is already a user with this email." });
  //     }
  //     //hash the password, with a salt length of 12
  //     const hashedPassword = await bcrypt.hash(req.body.password, 12);
  //     //create a new user
  //     const newUser = new User({
  //       email: req.body.email,
  //       password: hashedPassword,
  //       name: req.body.name,
  //     });
  //     //save the user to the database, add cookie upon register
  //     const savedUser = await newUser.save();
  //     const payload = { userId: savedUser._id };
  //     const token = jwt.sign(payload, process.env.REACT_APP_JWT_SECRET, {
  //       expiresIn: "7d",
  //     });
  //     res.cookie("access-token", token, {
  //       //expires in 7 days
  //       expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  //       httpOnly: true,
  //       //if we are in production secure will be true
  //       secure: process.env.NODE_ENV === "production",
  //     });
  //     // create a new object and add the saved user data to it
  //     const userToReturn = { ...savedUser._doc };
  //     //remove password from post response
  //     delete userToReturn.password;
  //     //return the new user
  //     return res.json(userToReturn);
  //   } catch (err) {
  //     //error here
  //     console.log(err);
  //     res.status(500).send(err.message);
  //   }
};

const login = async (req, res) => {
  //   try {
  //     //check for the user by
  //     const user = await User.findOne({
  //       //check if email already exists in database
  //       email: new RegExp("^" + req.body.email + "$", "i"),
  //     });
  //     //if no user found return error
  //     if (!user) {
  //       return res.status(400).json({ error: "login credentials invalid" });
  //     }
  //     //if there is a user check password, passwordMatch resolves to true via bcrypt compare function
  //     const passwordMatch = await bcrypt.compare(
  //       //entered password
  //       req.body.password,
  //       //password we have stored on the server
  //       user.password
  //     );
  //     if (!passwordMatch) {
  //       return res.status(400).json({ error: "login credentials invalid" });
  //     }
  //     const payload = { userId: user._id };
  //     //jwt secret is a secret that we use to encode the data we want to store in a json web token
  //     // we create an access token for the user as a jwt, then we are going to verify that jwt and make sure it's valid
  //     //what jwt.sign does is encodes the payload by turning it into a json web token using the jwt secret in our .env file. You can easily read the token, but to verify the token we check it against our jwt secret
  //     const token = jwt.sign(payload, process.env.REACT_APP_JWT_SECRET, {
  //       expiresIn: "7d",
  //     });
  //     // //use our token to set a cookie.
  //     //   res.cookie("access-token", token, {
  //     //     //expires in 7days
  //     //     expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  //     //     //can only be accessed by http server, no one can access the cookie through the browser
  //     //     httpOnly: true,
  //     //     //if we are in production, make sure secure is true
  //     //     secure: process.env.NODE_ENV === "production",
  //     //   });
  //     const userToReturn = { ...user._doc };
  //     delete userToReturn.password;
  //     return res.json({
  //       token: token,
  //       user: userToReturn,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return res.status(500).send(err.message);
  //   }
};

// // export default token;

// //requiresAuth is using the middleware we created in permission.js
const current = async (req, res) => {
  console.log(req, req.user, "line 126 authController");
  if (!req.user) {
    return res.status(401).send("Unauthorized line 132 authContoller");
  }
  return res.json(req.user);
};

module.exports = { register, login, current, test };
