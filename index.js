import express from "express";
import bodyParser from "body-parser";

const Config = {
  PORT: 3000,
  BODY_PARSER: bodyParser.urlencoded({ extended: true }),
};

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { isPost: false });
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { isPost: false });
});

app.post("/submit", Config.BODY_PARSER, (req, res) => {
  console.log(req.body);
  res.send(201);
});

app.listen(Config.PORT, (err) => {
  if (err) {
    console.log("Error while initializing server:\n" + err);
    return;
  }

  console.log(`Server Ready: http://localhost:${Config.PORT}/`);
});
