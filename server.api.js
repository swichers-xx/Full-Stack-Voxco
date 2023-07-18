// server.api.js 

const getServers = async () => {
  const servers = db.getServers();
  
  // Enhance with status
  const enhancedServers = servers.map(server => {
    return {
      ...server,
      status: getServerStatus(server) 
    }
  });
  
  return enhancedServers;
}
