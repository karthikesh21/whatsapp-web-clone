const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000', 'http://127.0.0.1:5000'],
  credentials: true
}));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Example schema for WhatsApp messages
const Message = mongoose.model('Message', new mongoose.Schema({}, { strict: false }));

// Webhook endpoint to receive payloads
app.post('/webhook', async (req, res) => {
  await Message.create(req.body);
  res.sendStatus(200);
});


// Endpoint to get all messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

// Endpoint to get structured conversations for the frontend
app.get('/conversations', async (req, res) => {
  const messages = await Message.find();
  // Group by wa_id
  const conversationsMap = {};
  for (const doc of messages) {
    const entry = doc.metaData?.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    const contacts = value?.contacts || [];
    const msgs = value?.messages || [];
    if (contacts.length === 0 || msgs.length === 0) continue;
    const user = {
      id: contacts[0].wa_id,
      name: contacts[0].profile?.name || contacts[0].wa_id,
      phone: contacts[0].wa_id
    };
    if (!conversationsMap[user.id]) {
      conversationsMap[user.id] = {
        user,
        messages: []
      };
    }
    for (const m of msgs) {
      conversationsMap[user.id].messages.push({
        id: m.id,
        text: m.text?.body || '',
        timestamp: m.timestamp,
        fromMe: m.from !== user.id ? true : false,
        status: m.status || 'sent',
      });
    }
  }
  // Convert to array
  const conversations = Object.values(conversationsMap);
  res.json(conversations);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port Sucessfully 🎉 ${PORT}`));
