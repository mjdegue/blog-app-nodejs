import express from "express";

const Config = {
    PORT: 3000,
}

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(Config.PORT, (err) => {
    if (err) {
        console.log("Error while initializing server:\n" + err);
        return;
    }

    console.log(`Server Ready: http://localhost:${Config.PORT}/`);
});