FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000  
# ENV MONGO_USER=root
# ENV MONGO_PASSWORD=root
# ENV MONGO_PORT=27017
# ENV MONGO_HOST=mongo-db
CMD ["npm", "run", "start"]

# docker run -d -p 3000:3000 --name=mongo-backend-container --network=mongo-net mongo-backend:01