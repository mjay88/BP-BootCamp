const routes = require("express").Router();

const authRoutes = require("./auth");
const apiRoutes = require("./api");

routes.use("/api", apiRoutes);

module.exports = routes;
