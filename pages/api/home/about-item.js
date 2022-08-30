import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, subtitle, description } = data;

    const client = await connectToDatabase();
    const db = client.db();
    const result = await db.collection("about-items").insertOne({
      title,
      subtitle,
      description,
    });

    client.close();
    res.status(201).json({ message: "Created aboutItem" });
  }
  if (req.method === "GET") {
    const client = await connectToDatabase();
    const db = client.db();
    const abouts = await db.collection("about-items").find({}).toArray();
    client.close();
    res.status(201).json({ abouts: abouts });
  }
  if (req.method === "DELETE") {
    const { title } = req.body;
    console.log(title);
    const client = await connectToDatabase();
    const db = client.db();
    const result = await db
      .collection("about-items")
      .findOneAndDelete({ title: title });

    client.close();
    res.status(201).json({ message: "Deleted aboutItem" });
  }
};

export default handler;
