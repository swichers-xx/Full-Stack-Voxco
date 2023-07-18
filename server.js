// server.js

const express = require('express');
const ps = require('powershell'); // powershell wrapper package

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

// and so on for other APIs...

// containerize
docker build -t server .
docker run -p 3000:3000 server
