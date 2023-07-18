// services.api.js

const getServices = async () => {
  const services = db.getServices();

  // Enhance with status
  const enhancedServices = services.map(service => {
    return {
      ...service,
      status: getServiceStatus(service)
    }
  });

  return enhancedServices;
}
