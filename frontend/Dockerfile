# Dockerfile

# Use Node 16 Alpine image as base
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json before other files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy over app files
COPY . .

# Build production artifacts
RUN npm run build 

# Serve the React app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
