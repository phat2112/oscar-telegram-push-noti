import axios from "axios";

import express, { Request, Response } from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.text());
app.use(express.json());

dotenv.config();

const BOT_ID = process.env.BOT_ID;
const ROOM_ID = process.env.ROOM_ID;
const PORT = process.env.PORT || 8000;

const sendTelegramNoti = async (request: { chat_id: number; text: string }) => {
  try {
    const response = await axios.post(
      `https://api.telegram.org/${BOT_ID}:${ROOM_ID}/sendMessage`,
      request,
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

app.post("/send-scalping-alert", async (req, res) => {
  const request = {
    chat_id: -1002136418188,
    text: req.body,
  };

  await sendTelegramNoti(request);

  res.status(204).json({ message: "success" });
});

app.post("/send-mexc-alert", async (req, res) => {
  const request = {
    chat_id: -1001510779619,
    text: req.body,
  };

  await sendTelegramNoti(request);

  res.status(204).json({ message: "success" });
});

app.post("/send-filter-alert", async (req, res) => {
  const request = {
    chat_id: -1002144254676,
    text: req.body,
  };

  await sendTelegramNoti(request);

  res.status(204).json({ message: "success" });
});

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
