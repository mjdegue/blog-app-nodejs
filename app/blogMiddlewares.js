import { writePost, deletePost } from "./blogFileManager.js";

export function submitPostMiddleware(req, res, next) {
  writePost(req.body.postId, req.body.postTitle, req.body.postText);

  next();
}

export function deletePostMiddleware(req, res, next) {
  deletePost(req.body.postId);
  next();
}
