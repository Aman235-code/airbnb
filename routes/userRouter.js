const express = require("express");

const userRouter = express.Router();

const homesController = require("../controllers/homes");

userRouter.get("/", homesController.getHomes);

module.exports = userRouter;
