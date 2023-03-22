FROM node:18.12-slim
WORKDIR /usr/src/frontend/app

COPY ./frontend/app/package.json .

RUN yarn install

COPY ./frontend/app .

