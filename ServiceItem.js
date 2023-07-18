// ServiceItem.js

const ServiceItem = styled.div`
  padding: 8px 16px;
  border-bottom: 1px solid #ddd;
  
  .status {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

// ServiceList
<ServiceItem>
  {name} <span className="status">{status}</span>
</ServiceItem>
