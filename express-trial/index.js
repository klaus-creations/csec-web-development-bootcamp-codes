import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/post", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    res
      .status(300)
      .send({ success: false, message: "please enter the required field" });
  }
  res.send({
    success: true,
    data: {
      name,
      email,
    },
  });
});

app.listen(3000, () => console.log("server is running on port 3000"));
