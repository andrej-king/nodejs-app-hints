FROM node:17-alpine

# clinic: Diagnose performance issues in your Node.js applications
# autocannon: benchmarking tool

RUN apk add curl

RUN npm i -g npm@8.* typescript clinic autocannon

WORKDIR /app
