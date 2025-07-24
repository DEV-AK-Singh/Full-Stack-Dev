from kafka import KafkaProducer
import time, os

KAFKA_TOPIC = os.getenv('KAFKA_TOPIC', 'emails')
KAFKA_BROKER = os.getenv('KAFKA_BROKER', 'localhost:9092')
EMAILS_FILE = os.getenv('EMAILS_FILE', 'emails.txt')

def send_to_kafka():
    producer = KafkaProducer(bootstrap_servers=KAFKA_BROKER)
    seen_emails = set()
    while True:
        with open(EMAILS_FILE) as f:
            emails = f.read().splitlines()
            for email in emails:
                email = email.strip()
                if email not in seen_emails:
                    producer.send(KAFKA_TOPIC, email.encode("utf-8"))
                    seen_emails.add(email)
        time.sleep(5) 

if __name__ == "__main__":
    send_to_kafka()