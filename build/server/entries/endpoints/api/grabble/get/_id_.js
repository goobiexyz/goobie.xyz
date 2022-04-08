import dotenv from "dotenv";
import { ObjectID } from "mongodb";
import { c as clientPromise } from "../../../../../chunks/mongodb-client-16d1d506.js";
dotenv.config();
async function get({ params }) {
  const dbConnection = await clientPromise;
  let db = dbConnection.db(process.env["DB_NAME"]);
  let query = { _id: ObjectID(params.id) };
  let posts = await db.collection("posts").find(query).toArray();
  let post;
  if (posts.length > 0) {
    post = posts[0];
  }
  return {
    status: 200,
    body: post
  };
}
export { get };
