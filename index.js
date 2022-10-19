const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const catagories = require("./data/catagories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("news api running!");
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log("alo running on ", port);
});
