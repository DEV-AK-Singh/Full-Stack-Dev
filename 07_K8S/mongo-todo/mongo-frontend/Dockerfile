FROM node:latest
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 5173
ENV VITE_APP_PORT=5173
ENV VITE_API_HOST=mongo-backend-container
ENV VITE_API_PORT=3000
CMD ["npm", "run", "dev"]

# docker run -d -p 5173:5173 --name=mongo-frontend-container --network=mongo-net mongo-frontend:01