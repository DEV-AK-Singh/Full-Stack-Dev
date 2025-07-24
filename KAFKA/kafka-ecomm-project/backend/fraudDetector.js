const { kafka } = require('./server');
const producer = kafka.producer();

const consumer = kafka.consumer({ groupId: 'fraud-detection' });

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders' });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const order = JSON.parse(message.value);
      
      // Fake fraud check
      const isFraud = order.amount > 1000;
      const topic = isFraud ? 'dead-letter-queue' : 'validated-orders';

      await producer.connect();
      await producer.send({
        topic,
        messages: [message]
      });
      await producer.disconnect();

      console.log(`Order ${order._id} ${isFraud ? 'rejected' : 'validated'}`);
    }
  });
}

run().catch(console.error);