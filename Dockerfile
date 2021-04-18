FROM node:12-alpine AS base
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM base AS build-front
COPY ./ ./
RUN npm install
RUN npm run build

FROM base AS release
ENV STATIC_FILES_PATH=./public
COPY --from=build-front /usr/app/dist $STATIC_FILES_PATH
COPY ./server/package.json ./
COPY ./server/index.js ./
RUN npm install --only=production

ENV PORT=8080
EXPOSE 8080

ENTRYPOINT [ "node", "index" ]
