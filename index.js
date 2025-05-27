import express from "express";

const Config = {
    PORT: 3000,
}

const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.listen(Config.PORT, (err) => {
    if (err) {
        console.log("Error while initializing server:\n" + err);
        return;
    }

    console.log(`Server Ready: http://localhost:${Config.PORT}/`);
})