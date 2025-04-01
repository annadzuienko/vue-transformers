FROM node:20.17.0-alpine AS build

WORKDIR /opt

COPY . ./

RUN npm i && npm run build

FROM nginx:latest

COPY --from=build /opt/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf