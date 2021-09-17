FROM node:14.17.0 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build
EXPOSE 4000
ENTRYPOINT [ "node","dist/index.js" ]