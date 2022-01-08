FROM node:16-alpine as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

EXPOSE 80
EXPOSE 443

FROM nginx:latest
COPY --from=build /app/dist /usr/share/nginx/html
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]