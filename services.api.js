// services.api.js
// services.api.js

const getVoxcoServices = async () => {

  const allServices = await getServices(); 

  const voxcoServices = allServices.filter(service => 
    service.name.includes('Voxco')
  );

  return voxcoServices;

}
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
