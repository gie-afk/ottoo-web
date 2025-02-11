FROM node:18.20.5-bullseye

WORKDIR /ottoo

COPY package.json /ottoo
COPY package-lock.json /ottoo

RUN npm cache clean --force
RUN npm i

COPY . .

EXPOSE 8080
