import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// API Key cho OpenAI (lấy từ biến môi trường)
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.get("/", (req, res) => {
  res.send("Welcome to the Chatbot API!");
});


app.post("/chatbot", async (req, res) => {
  try {
    const { message } = req.body; 

    if (!message || message.trim() === "") {
      return res.status(400).json({ error: "Message không hợp lệ" });
    }

    // Gọi API OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // Hoặc "gpt-4"
        messages: [{ role: "user", content: message }],
        max_tokens: 1000,
      }),
    });

    const data = await response.json();

    // Kiểm tra lỗi từ API OpenAI
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Đã có lỗi xảy ra từ API OpenAI",
      });
    }

    // Trả về câu trả lời từ OpenAI
    res.json({ reply: data.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error calling OpenAI API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Khởi chạy server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
