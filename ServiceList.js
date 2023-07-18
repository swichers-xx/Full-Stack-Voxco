const ServiceList = ({services}) => {

  const filtered = services.filter(s => s.name.includes('Voxco'));

  return (
    <div className="service-list">
      {filtered.map(service => (
        <div key={service.id}>
          {service.name} - {service.status} 
        </div>
      ))}
    </div>
  );
}

export default ServiceList;
