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

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/catagories", (req, res) => {
  res.send(catagories);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

app.get("/catagories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const selectedCatagory = news.filter((n) => n.category_id === id);
    res.send(selectedCatagory);
  }
});

app.listen(port, () => {
  console.log("alo running on ", port);
});
