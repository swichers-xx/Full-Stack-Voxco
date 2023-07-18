#!/bin/bash

# Update package lists
echo "Updating package lists..."
sudo apt-get update

# Install Node.js and npm
echo "Installing Node.js and npm..."
sudo apt-get install -y nodejs npm

# Install Docker
echo "Installing Docker..."
sudo apt-get install -y docker.io

# Navigate to project directory (replace with your actual project directory)
cd /path/to/project

# Install project dependencies
echo "Installing project dependencies..."
npm install

# Build Docker image
echo "Building Docker image..."
docker build -t server .

# Run Docker container
echo "Running Docker container..."
docker run -p 3000:3000 server

echo "Installation complete. Server is running."
