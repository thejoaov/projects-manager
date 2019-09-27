
FROM node:alpine

WORKDIR /usr/app

COPY . ./
RUN yarn global add @adonisjs/cli
RUN yarn