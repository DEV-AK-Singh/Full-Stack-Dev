// backend/app.js
const express = require('express');
const { Kafka } = require('kafkajs');
const mongoose = require('mongoose');

// Initialize
const app = express();
app.use(express.json());

// Kafka setup
const kafka = new Kafka({
  clientId: 'backend-kafka-1',
  brokers: ['localhost:9092']
});

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ecomm')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Basic route
app.get('/', (req, res) => {
  res.send('E-Commerce Kafka Backend');
});

// Start server
const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

// Socket.io setup
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on('connection', (socket) => {
  console.log('Client connected');
});

exports.kafka = kafka;
exports.io = io;