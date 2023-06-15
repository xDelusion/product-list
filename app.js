const PORT = 8000;

const express = require("express");
const products = require("./data");

const app = express();

app.get("/api/products", (req, res) => {
  return res.status(200).json({ products });
});

app.listen(PORT);
