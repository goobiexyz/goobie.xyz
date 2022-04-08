import dotenv from "dotenv";
import { c as clientPromise } from "../../../../../chunks/mongodb-client-16d1d506.js";
import "mongodb";
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
  let db = dbConnection.db(process.env["DB_NAME"]);
  let postCount = await db.collection("posts").countDocuments(query);
  return {
    status: 200,
    body: postCount
  };
}
export { get };
