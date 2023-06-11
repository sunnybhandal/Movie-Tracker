import User from "../../models/user";
import dbConnect from "@/config/dbConnect";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  console.log(req.body, res.method, "save list");
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);

    console.log("SESSION", session);
    // const db = dbConnect();
    // console.log(db);
    // const collection = db.collection("users");
    // console.log(collection);
    // await collection.insertOne(movieList);
    // res.status(201).json({ doc });

    try {
      const { movieList } = req.body;
      const db = await connectToDatabase();
      console.log(db);
      const collection = db.collection("users");
      console.log(collection);

      await collection.insertOne(movieList);
      res.status(200).json({ message: "Object saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error saving object" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
