FROM node:16-alpine3.13

EXPOSE 3000/tcp

WORKDIR /app

COPY app/ .

CMD npm run start