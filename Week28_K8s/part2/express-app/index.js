import dotenv from 'dotenv';
import express from 'express';

dotenv.config({
  path: "./config/.env"
})
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const envVars = {
    DATABASE_URL: process.env.DATABASE_URL || "null",
    CACHE_SIZE: process.env.CACHE_SIZE || "null",
    PAYMENT_GATEWAY_URL: process.env.PAYMENT_GATEWAY_URL || "null",
    MAX_CART_ITEMS: process.env.MAX_CART_ITEMS || "null",
    SESSION_TIMEOUT: process.env.SESSION_TIMEOUT || "null",
  };

  res.send(`
    <h1>Environment Variables</h1>
    <pre>${JSON.stringify(envVars, null, 2)}</pre>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
