FROM node:14-alpine as front-build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

# этап production (production-stage)
FROM nginx:stable-alpine as front-production-stage
COPY .docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=front-build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]