FROM ubuntu:latest
LABEL authors="anato"

ENTRYPOINT ["top", "-b"]
FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]



