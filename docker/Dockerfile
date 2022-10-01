FROM node:lts-slim

WORKDIR /workspace

ADD package.json ./package.json
ADD yarn.lock ./yarn.lock

RUN apt-get update && apt-get install -y git yarn && yarn

EXPOSE 8000