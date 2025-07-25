const { kafka } = require('./server');
const Order = require('./models/Order');

const producer = kafka.producer();

async function sendOrder(orderData) {
  // 1. Save to MongoDB
  const order = new Order(orderData);
  await order.save();

  // 2. Send to Kafka
  await producer.connect();
  await producer.send({
    topic: 'orders',
    messages: [{
      key: order.userId,
      value: JSON.stringify(order)
    }]
  });

  console.log(`Order ${order._id} produced`);
  await producer.disconnect();
}

// Test order
sendOrder({
  userId: 'user123',
  products: [{ productId: 'prod1', quantity: 2, price: 19.99 }, { productId: 'prod2', quantity: 1, price: 29.99 }],
  amount: 20000,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  },
  status: 'pending'
});