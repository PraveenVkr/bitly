import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function urlCreate(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: " send url" });
  const shortId = nanoid(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    timestamps: [],
  });
  return res.status(201).json({ id: shortId });
}
export default urlCreate;
