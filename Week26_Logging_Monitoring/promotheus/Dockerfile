FROM node:slim

RUN npm i -g bun
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN bun install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "bun","run", "dev" ]