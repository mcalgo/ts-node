FROM node:14.17.0 as builder
WORKDIR /dist
COPY package*.json ./
RUN npm install 
COPY . .
CMD [ "npm", "start" ]

FROM node:14.17.0
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production

COPY --from=builder /usr/app/dist ./dist

COPY ormconfig.docker.json ./ormconfig.json
COPY .env . 

EXPOSE 4000
CMD node dist/src/indes.js
