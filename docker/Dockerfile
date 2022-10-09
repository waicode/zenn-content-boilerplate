FROM node:lts-slim

WORKDIR /workspace

ADD .husky/pre-commit ./.husky/pre-commit
ADD package.json ./package.json
ADD yarn.lock ./yarn.lock

RUN chmod +x .husky/pre-commit && apt-get update && apt-get install -y git yarn && yarn

EXPOSE 8000