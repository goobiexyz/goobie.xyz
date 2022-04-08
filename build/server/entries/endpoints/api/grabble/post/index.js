import dotenv from "dotenv";
import { c as clientPromise } from "../../../../../chunks/mongodb-client-16d1d506.js";
import "mongodb";
dotenv.config();
async function post({ request }) {
  const dbConnection = await clientPromise;
  let db = dbConnection.db(process.env["DB_NAME"]);
  const post2 = await request.json();
  console.log(post2);
  let posts = db.collection("test");
  let result = await posts.insertOne(post2);
  return {
    status: 201,
    body: result
  };
}
export { post };
