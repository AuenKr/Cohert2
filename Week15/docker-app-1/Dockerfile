# Base images
FROM node:20-alpine

# Set docker working dir
WORKDIR /app

# Copy source destination except for location present in .dockerignore
COPY . .

# Further installing commands
RUN npm install
RUN npx prisma generate
RUN npm run build

# Expose docker posrt
EXPOSE 3000

# Command to run when image is executed
CMD [ "node", "dist/index.js" ]