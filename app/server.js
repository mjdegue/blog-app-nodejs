import express from "express";
import { Config } from "./config.js";
import mainRoutes from "./mainRoutes.js";

const app = express();

app.use(Config.BODY_PARSER);
app.use(express.static("public"));
app.use("/", mainRoutes);

export default app;
