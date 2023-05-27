import User from "../../models/user";
import dbConnect from "@/config/dbConnect";

export default async function handler(req, res) {
  console.log(req.body, "hi");

  if (req.method === "POST") {
    dbConnect();
    const doc = new User({ movieList: req.body.movieList });
    doc.save();
    // const movieList = await User.update(req.body);

    // res.status(201).json({ movieList });
  }
}
