// utils/services.js

const ps = require('powershell');

async function getServices() {
 
  const cmd = 'Get-Service | ConvertTo-Json';

  return await ps.execute(cmd);

}

async function stopService(id) {

  const cmd = `Stop-Service -Name ${id}`;
  
  await ps.execute(cmd);

}

module.exports = {
  getServices,
  stopService  
}
