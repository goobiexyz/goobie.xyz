import dotenv from "dotenv";
import { c as clientPromise } from "../../../../../chunks/mongodb-client-16d1d506.js";
import "mongodb";
function constrain(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
dotenv.config();
const postTypes = ["video", "music", "art", "blog"];
async function get({ url }) {
  let query = {};
  if (url.searchParams.has("type")) {
    let type = url.searchParams.get("type");
    if (postTypes.includes(type)) {
      query.type = type;
    } else {
      return {
        status: 400,
        body: `Invalid post type: "${type}"`
      };
    }
  }
  const dbConnection = await clientPromise;
  const db = dbConnection.db(process.env["DB_NAME"]);
  let posts = await db.collection("posts").find(query).sort({ date: -1 }).toArray();
  let min = 0;
  let max = posts.length;
  if (url.searchParams.has("max")) {
    max = constrain(url.searchParams.get("max"), 1, max);
  }
  if (url.searchParams.has("min")) {
    min = constrain(url.searchParams.get("min"), 0, max - 1);
  }
  posts = posts.slice(min, max);
  return {
    status: 200,
    body: posts
  };
}
export { get };
