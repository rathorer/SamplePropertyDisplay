import React, {useState, useEffect} from 'react';
import { getProperties, ApiBaseUrl } from '../api/propertyApi'; // Adjust the import path as necessary
import Property from './components/Property';

const Properties = () => {

const [properties, setProperties] = useState([]);
const [error, setError] = useState(null);
useEffect(() => {
  const fetchProperties = async () => {
    try {
      const properties = await getProperties();
      console.log("Properties:", properties.data);
      if(!properties.data || properties.data.length === 0) {
        console.warn("No properties found or data is empty.");
        setError(properties.error || "No properties available.");
      }
      setProperties(properties.data);
    } catch (error) {
      setError("Failed to fetch properties. Please ensure if API is running at '" + ApiBaseUrl + "'.");
      //console.error("Error fetching properties:", error);
    }
  };

  fetchProperties();
}, []);
return (
    <div>
      <h1>Properties</h1>
      {properties && properties.length > 0 ? (
        properties.map((property) => (
          <ul key={property.PropertyId} className="property">
            <li><h3>{property.PropertyName}</h3></li>
            <Property key={property.PropertyId} property={property} />
          </ul>
        ))
      ) : (
        <b style={{ color: 'red' }}>{error}</b>
      )}
    </div>
  );
};

export default Properties;