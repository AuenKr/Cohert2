import express from 'express';
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  const envVars = {
    DATABASE_URL: process.env.DATABASE_URL || "null",
    CACHE_SIZE: process.env.CACHE_SIZE || "null",
    PAYMENT_GATEWAY_URL: process.env.PAYMENT_GATEWAY_URL || "null",
    MAX_CART_ITEMS: process.env.MAX_CART_ITEMS || "null",
    SESSION_TIMEOUT: process.env.SESSION_TIMEOUT || "null",
  };

  res.json({
    message: 'This is test message',
    envVars
  })
})

app.get('/chat', async (req, res) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "Your Gemini API key");
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = "Write a story about a magic backpack.";

  const result = await model.generateContentStream(prompt);

  for await (const chunk of result.stream) {
    res.write(chunk.text().toString());  
  }
  

  res.json({
    msg: "Check the console for the generated content",
  })
})

app.listen(port, () => {
  console.log('Server is running on port 3000')
})