import { createNewPost } from "./blogFileManager.js";

export function submitPostMiddleware(req, res, next) {
  if (req.body.postId != null) {
    // Here we update the post.
    return;
  }
  createNewPost(req.body.postTitle, req.body.postText);

  next();
}
