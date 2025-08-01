import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/route.js";
import URL from "./models/url.js";

dotenv.config();

await mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connnected"));
const PORT = 7000;

const app = express();
app.use(express.json());
app.use("/url", router);
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  return res.redirect(entry.redirectUrl);
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
