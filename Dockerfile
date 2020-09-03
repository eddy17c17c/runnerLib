FROM node:14.9-slim

WORKDIR /app

COPY package.json /app/package.json

COPY yarn.lock /app/yarn.lock

RUN cd app \
    && apt-get update \
    && npm install -g nodemon \
    && yarn install

EXPOSE 3000

COPY . /app

CMD ["nodemon server.js"]