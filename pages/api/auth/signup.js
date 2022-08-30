import hashPassword from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { username, password } = data;

    const client = await connectToDatabase();
    const db = client.db();

    const existingUser = await db
      .collection("users")
      .findOne({ username: username });

    if (existingUser) {
      res
        .status(422)
        .json({ message: "User already exists with the same email address" });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection("users").insertOne({
      username: username,
      password: hashedPassword,
    });

    client.close();
    res.status(201).json({ message: "Created user" });
  }
};

export default handler;
