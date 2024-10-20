const express = require("express");

const path = require("path");

const hostRouter = express.Router();

const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
  res.render("addHome", { pageTitle: "Add your home" });
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  registeredHomes.push({ houseName: req.body.houseName });
  // res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
  res.render("homeAdded", { pageTitle: "Home is added" });
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
