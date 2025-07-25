from kafka import KafkaConsumer
import time, os

KAFKA_TOPIC = os.getenv('KAFKA_TOPIC', 'emails')
KAFKA_BROKER = os.getenv('KAFKA_BROKER', 'localhost:9092')

def consume_from_kafka():
    consumer = KafkaConsumer(KAFKA_TOPIC, bootstrap_servers=KAFKA_BROKER, auto_offset_reset='earliest', enable_auto_commit=True)
    print("Waiting for emails...")
    for message in consumer:
        print(message.value.decode("utf-8")) 

if __name__ == "__main__": 
    consume_from_kafka()