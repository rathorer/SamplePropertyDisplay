import React, { useState, useEffect } from 'react';

const Property = ({ property }) => {
  //const [property, setProperty] = useState(prop);
  const [isOpen, setIsOpen] = useState(true);
  const toggleList = () => setIsOpen(!isOpen);
  return (
    <div key={property.PropertyId} className="property-details">
      <a href="#" onClick={toggleList} className="toggle-button">
        {isOpen ? 'hide ▲' : 'show ▼'}
      </a>
      <ul className={`collapsible-list ${isOpen ? 'open' : ''}`} >
        
        <li><b>Features: </b>{property.features.join(", ")}</li>
        <li><b>Highlights: </b>{property.highlights.join(", ")}</li>
        <li><b>Transportation: </b>{
          property.transportation.map((t, i) => (
            <span key={i}> {i === 0 ? '' : ', '} {t.Line}  ({t.Distance})</span>
          ))
        }</li>
        <li><b>Spaces: </b><ul>{
          property.spaces.map(s => (
            <li key={s.SpaceId}><b>{s.SpaceName}:</b>
              <ul>
                {s.rentRoll.map(r => (
                  <li key={r.Month}>{r.Month}: {`$${r.Rent}`}</li>
                ))}
              </ul>
            </li>
          ))
        }</ul></li>
      </ul>
    </div>
  );
};

export default Property;