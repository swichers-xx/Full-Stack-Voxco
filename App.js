// App.js

import React from 'react'; 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';s

// Other imports...

export default function App() {
  // Component code...
}

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
// Apply class based on status 
const statusColor = {
  up: 'green',
  down: 'red'
};

const ServerLabel = ({name, status}) => {
  return (
    <span className={`server ${statusColor[status]}`}>
      {name}
    </span>
  )
}

const ServiceLabel = ({name, status}) => {
  return (
    <span className={`service ${statusColor[status]}`}>
     {name}
    </span>
  ) 
}
if(status === 'failed') {
  return <ErrorMessage error={error} />
}
