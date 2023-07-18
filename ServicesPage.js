// ServicesPage.js

import { useEffect, useState } from 'react';
// ServicesPage.js

import { useDispatch, useSelector } from 'react-redux';
import { fetchServices } from './servicesSlice';

import { fetchServices } from './servicesSlice';
import ServiceList from './ServiceList';
const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchServices()); 
}, [dispatch]);

const services = useSelector(state => state.services.items);
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
  const services = useSelector(state => state.services);

  return (
    <div>
      <h1>Services</h1>
      <ServiceList services={services} />
    </div>
  );
}s
}
