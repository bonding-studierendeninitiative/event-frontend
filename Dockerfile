# stage 1 - build angular app
FROM node:lts-alpine as build

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app

RUN npx ng build --prod --output-path ./dist

# image
FROM webdevops/php-apache

COPY --from=build /app/dist /app
COPY .htaccess /app
