// Get server status on load
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/servers');
    const servers = await response.json();
    setServers(servers);
  }
  
  fetchData();
}, []);

// Render server list
return (
  <div>
    {servers.map(server => (
      <ServerLabel 
        name={server.name}
        status={server.status} // red or green
      />
    ))}
  </div>
)
// Get services on load
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('/api/services');
    const services = await response.json();
    setServices(services);
  }
  
  fetchData();
}, []);

// Render service list
return (
  <div>
    {services.map(service => (
      <ServiceLabel 
        name={service.name}
        status={service.status} // red or green
      />  
    ))}
  </div>
)

// ServerLabel
const ServerLabel = ({name, status}) => {
  return (
    <span className={`server ${status}`}>
      {name}
    </span>
  )
}

// ServiceLabel 
const ServiceLabel = ({name, status}) => {
  return (
    <span className={`service ${status}`}>
      {name} 
    </span>
  )
}
