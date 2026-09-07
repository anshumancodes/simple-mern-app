import express from "express";

const app = express();
app.use(express.json());

const items = [];

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>Hey 👋</h1>
        <p>
          This is a simple Express app deployed by Anshuman.
          It's hosted on DigitalOcean btw and uses Nginx reverse proxy.
        </p>
        <p>
          <a href="https://anshumancdx.xyz/blog">Read my blog</a>
        </p>
      </body>
    </html>
  `);
});

app.post("/", (req, res) => {
  items.push(req.body);
  res.json({ message: "Saved", data: req.body });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});