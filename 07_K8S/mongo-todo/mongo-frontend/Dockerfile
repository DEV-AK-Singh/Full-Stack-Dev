FROM node:latest as builder
WORKDIR /app
COPY . . 
RUN npm install
EXPOSE 5173
# ENV VITE_APP_PORT=5173
# ENV VITE_API_HOST=mongo-backend-container
# ENV VITE_API_PORT=3000
RUN npm run build
CMD [ "npm", "run", "dev" ]

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 

# docker run -d -p 5173:5173 --name=mongo-frontend-container --network=mongo-net mongo-frontend:01