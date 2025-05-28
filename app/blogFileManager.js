import fs from "fs";
import { dirname } from "path";
import { Config } from "./config.js";

const CONTENT_DIR = Config.ROOT_DIR + "/content/";
const POST_ID_FILE = "next_post_id.txt";
console.log(CONTENT_DIR);
export function writePost(inPostId, postTitle, postText) {
  const postId = inPostId != null ? inPostId : getNextPostId();
  fs.writeFileSync(
    `${CONTENT_DIR}/${postId}.txt`,
    JSON.stringify({ id: postId, title: postTitle, content: postText })
  );
}

export function deletePost(inPostId) {
  fs.unlinkSync(`${CONTENT_DIR}${inPostId}.txt`);
}

function getNextPostId() {
  var text = fs.readFileSync(`${CONTENT_DIR}${POST_ID_FILE}`);
  if (isNaN(text)) {
    return;
  }

  var nextId = parseInt(text);
  fs.writeFileSync(`${CONTENT_DIR}${POST_ID_FILE}`, `${nextId + 1}`);
  return nextId;
}

export function listAllPosts() {
  var allPosts = [];
  fs.readdirSync(CONTENT_DIR)
    .filter((fileName) => {
      return fileName != POST_ID_FILE;
    })
    .forEach((fileName) => {
      const fullFileName = `${CONTENT_DIR}${fileName}`;
      const postObject = JSON.parse(fs.readFileSync(fullFileName));
      allPosts.push({ postId: postObject.id, postTitle: postObject.title });
    });

  return allPosts;
}

export function getPostById(postId) {
  const postObj = JSON.parse(fs.readFileSync(`${CONTENT_DIR}${postId}.txt`));
  return postObj;
}
