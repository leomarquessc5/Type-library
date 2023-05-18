FROM node:18-alpine as node

WORKDIR /home/node/app

# COPY package.json and package-lock.json files
COPY package*.json ./

# COPY ENV variable
COPY .env ./

RUN npm i

# COPY
COPY . .

