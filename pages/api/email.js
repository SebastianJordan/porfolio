import db from "../../utils/db";
export default async function handler(req, res) {
  try {
    const { email } = req.body;
    const subscriptions = await db.collection("subscription").get();
    const emails = subscriptions.docs.map((subs) => subs.data());
    if (emails.filter((e) => e.email === email).length > 0) {
      res.status(200).json({ status: "Exist" });
    } else {
      const { id } = await db.collection("subscription").add({
        email,
      });
      res.status(200).json({ status: "save" });
    }
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    return;
  }
}
