// server.utils.js

function getServerStatus(server) {
  // Ping server to determine if up or down
  const status = server.isResponding ? 'up' : 'down'; 
  return status;
}

// services.utils.js

function getServiceStatus(service) {
  // Call Get-Service to get status
  const status = service.isRunning ? 'up' : 'down';
  return status;
}
