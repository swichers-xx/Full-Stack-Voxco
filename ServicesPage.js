// ServicesPage.js

import { useEffect, useState } from 'react';

const ServicesPage = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch('/api/services');
      const data = await response.json();
      setServices(data);
    };
    fetchServices();
  }, []);

  // render UI
}
