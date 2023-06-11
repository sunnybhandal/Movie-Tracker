import User from "../../models/user";
import dbConnect from "@/config/dbConnect";
import { authOptions } from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function handler(req, res) {
  if (req.method === "POST") {
    dbConnect();
    const session = await getServerSession(req, res, authOptions);
    const { movieList } = req.body;
    const email = session.user.email;

    try {
      await User.updateOne({ email }, { movieList: movieList });
      res.status(201).json({ message: "Object saved successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error saving object" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
