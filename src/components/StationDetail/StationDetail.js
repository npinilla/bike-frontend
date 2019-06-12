import React from 'react';

const StationDetail = ({ station }) => {
  return(
    <div>
      <li key={station.id}>
        <h3>{`${station.name}:`}</h3>
        <ul>
          <li key={`${station.id}_free`}>
            {`${station.free_bikes} bicicletas libres`}
          </li>
          <li key={`${station.id}_used`}>
            {`${station.empty_slots} bicicletas usadas`}
          </li>
          <li key={`${station.id}_last_updated`}>
            {`Actualizado hace ${station.last_updated}`}
          </li>
        </ul>
      </li>
    </div>
  );
};

export default StationDetail;
