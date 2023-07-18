// utils/servers.js

const ps = require('powershell'); 

async function getServers() {

  const cmd = 'Get-Content servers.txt'; // placeholder for demo

  const servers = await ps.execute(cmd);

  return servers;

}

async function getServer(id) {
  
  const cmd = `Get-Content servers.txt | ConvertFrom-Json | Where {$.id -eq ${id}}`; // placeholder
  
  return await ps.execute(cmd);

}

async function createServer(data) {

  // TODO: validate input 

  const cmd = `Add-Content servers.txt ${JSON.stringify(data)}`; // placeholder

  await ps.execute(cmd);

  return data;

}

module.exports = {
  getServers,
  getServer,
  createServer
}
