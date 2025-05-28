import express from "express";
import { Config } from "./config.js";
import {
  submitPostMiddleware,
  deletePostMiddleware,
} from "./blogMiddlewares.js";
import { getPostById, listAllPosts } from "./blogFileManager.js";

const router = express.Router();

router.get("/", (req, res) => {
  const postsList = listAllPosts();
  res.render("index.ejs", { postsList: postsList });
});

router.get("/read-post", (req, res) => {
  const postData = getPostById(req.query.postId);
  res.render("readPost.ejs", { postData: postData });
});

router.post("/edit-post", (req, res) => {
  console.log(req.body);
  const postData = getPostById(req.body.postId);
  res.render("create.ejs", { postData: postData, isEditing: true });
});

router.get("/create", (req, res) => {
  res.render("create.ejs");
});

router.post("/submit-post", submitPostMiddleware, (req, res) => {
  res.redirect("/");
});

router.post("/delete-post", deletePostMiddleware, (req, res) => {
  res.redirect("/");
});

export default router;
