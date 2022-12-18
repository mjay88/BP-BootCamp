const express = require("express");
const router = require("express").Router();
const authRoute = require("express").Router();

// controller here

// POST -> /auth/login
authRoute.post("/login", () => {});

// POST -> /auth/sign-up
authRoute.post("/sign-up", () => {});

// POST -> /auth/logout
authRoute.post("/logout", () => {});

// POST -> /auth/forgot-password
authRoute.post("/forgot-password", () => {});

// PUT -> /auth/check-code
authRoute.put("/check-code", () => {});

// PUT -> /auth/update-password
authRoute.put("/update-password", () => {});

module.exports = authRoute;
