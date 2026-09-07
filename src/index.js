import express from "express"

const app = express();
app.use(express.json());

const items = [];

app.get("/", (req, res) => {
  res.json(items);
});

app.post("/", (req, res) => {
  items.push(req.body);
  res.json({ message: "Saved", data: req.body });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});