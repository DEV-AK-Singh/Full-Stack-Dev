FROM node:24-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 
EXPOSE 3000
CMD ["npm", "run", "start"]