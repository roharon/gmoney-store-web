FROM node:12.2.0-alpine
MAINTAINER AaronRoh

RUN mkdir /web
WORKDIR /web
ENV PATH /node_modules/.bin:$PATH
COPY package.json /web/package.json

RUN npm install --no-cache
RUN npm install -g react-scripts
RUN npm install -g react-router-dom
RUN apk add --no-cache git

COPY . /web
CMD ["npm", "start"]