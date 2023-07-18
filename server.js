// server.js

const express = require('express');
const ps = require('powershell'); // powershell wrapper package
const serverUtils = require('./utils/server'); 
const serviceUtils = require('./utils/services'); 
const app = express();

// API to get disk space
app.get('/api/diskspace', async (req, res) => {

  const psCmd = `Get-WmiObject Win32_LogicalDisk -Filter "DeviceID = 'C:'" | Select-Object Size,FreeSpace`;

  const output = await ps.execute(psCmd);

  res.json(output);

});

// API to get service status 
app.get('/api/serviceStatus', async (req, res) => {

  const serviceName = req.query.service;

  const psCmd = `Get-Service -Name ${serviceName} | Select-Object Status`;
  
  const output = await ps.execute(psCmd);

  res.json(output);

});

// API to start a service
app.post('/api/startService', async (req, res) => {

  const serviceName = req.body.service;

  const psCmd = `Start-Service -Name ${serviceName}`;

  await ps.execute(psCmd);

  res.send('Service started');

});

// API to restart all Voxco services
app.post('/api/restartVoxcoServices', async (req, res) => {

  const psCmd = `Get-Service | Where-Object { $_.Name -like '*Voxco*' } | Restart-Service`;

  await ps.execute(psCmd);

  res.send('All Voxco services restarted');

});

router.get('/servers', getServers);  

// GET single server by id
// Access at GET /servers/:id
router.get('/servers/:id', getServer);  

// POST create new server
// Access at POST /servers
router.post('/servers', createServer);

// Service routes

// GET all services 
// Access at GET /services
router.get('/services', getServices);

// POST stop service by id
// Access at POST /services/:id/stop
router.post('/services/:id/stop', stopService);

// Route handlers

// Get all servers from utils and return JSON response
async function getServers(req, res) {
  const servers = await serverUtils.getServers();
  res.json(servers);
}

// Get single server by id from utils and return JSON response 
async function getServer(req, res) {
  const id = req.params.id; 
  const server = await serverUtils.getServer(id);
  res.json(server);
}

// Create server from request body and return JSON response
async function createServer(req, res) {
  // Input validation would go here  
  const server = await serverUtils.createServer(req.body);
  res.status(201).json(server);
}

// Get all services from utils and return JSON response
async function getServices(req, res) {
  const services = await serviceUtils.getServices();
  res.json(services);
} 

// Stop service by id using utils and return response
async function stopService(req, res) {
  const id = req.params.id;
  await serviceUtils.stopService(id);
  res.send('Service stopped');  
}

// Export router as module
module.exports = router;

// containerize
docker build -t server .
docker run -p 3000:3000 server
