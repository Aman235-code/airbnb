const express = require("express");

const path = require("path");

const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "404.html"));
  res.render("404", { pageTitle: "404 not found" });
});

app.listen(3000, () => {
  console.log("Server is running");
});
