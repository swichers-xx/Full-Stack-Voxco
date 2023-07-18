# Install Node.js and npm
Write-Host "Installing Node.js and npm..."
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
scoop install nodejs

# Install Docker
Write-Host "Installing Docker..."
Invoke-WebRequest -UseBasicParsing -OutFile dockerInstall.ps1 https://get.docker.com/
./dockerInstall.ps1

# Navigate to project directory (replace with your actual project directory)
cd /path/to/project

# Install project dependencies
Write-Host "Installing project dependencies..."
npm install

# Build Docker image
Write-Host "Building Docker image..."
docker build -t server .

# Run Docker container
Write-Host "Running Docker container..."
docker run -p 3000:3000 server

Write-Host "Installation complete. Server is running."
