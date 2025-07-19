// backend/index.js
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow only your Vercel frontend to access this backend
const allowedOrigins = ['https://jessicasingh.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const entry = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  // Save to a JSON file
  const filePath = './messages.json';
  const messages = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    : [];

  messages.push(entry);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  res.status(200).json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
