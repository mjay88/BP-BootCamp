require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 8080;

//init express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.options("*", cors());

// Logger for API requests on console
app.use(logger("dev"));

const defaultRoutes = require("./routes");
//import routes
//when we make a request to /routes/auth, it will look in the auth.js file
const authRoute = require("./routes/auth");

// Allowed headers to accept different request types
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-Width"
  );

  next();
});

app.use("/", defaultRoutes);
app.use("/api/auth", authRoute);

//connect to database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to BPC Database");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} `);
    });
  })
  .catch((error) => {
    console.log(error);
  });
