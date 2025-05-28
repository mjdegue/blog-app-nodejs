import express from "express";
import { Config } from "./config.js";
import { submitPostMiddleware } from "./blogMiddlewares.js";
import { getPostById, listAllPosts } from "./blogFileManager.js";

const router = express.Router();

router.get("/", (req, res) => {
  const postsList = listAllPosts();
  res.render("index.ejs", { isPost: false, postsList: postsList });
});

router.get("/read-post", (req, res) => {
  const postData = getPostById(req.query.postId);
  res.render("readPost.ejs", { isPost: true, postData: postData });
});

router.get("/create", (req, res) => {
  res.render("create.ejs", { isPost: false });
});

router.post("/submit-post", submitPostMiddleware, (req, res) => {
  res.redirect("/");
});

export default router;
