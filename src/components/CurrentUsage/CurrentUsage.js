import React from 'react';

import './CurrentUsage.css';

const CurrentUsage = ({ lastUpdate }) => {
  return(
    <div className="usageSummary">
      <div>
        <h1 className="usageNumber">{lastUpdate.y + lastUpdate.free_bikes}</h1>
        <p className="usageText">Total</p>
      </div>
      <div>
        <h1 className="usageNumber">{lastUpdate.y}</h1>
        <p className="usageText">Usadas</p>
      </div>
      <div>
        <h1 className="usageNumber">{lastUpdate.free_bikes}</h1>
        <p className="usageText">Libres</p>
      </div>
    </div>
  );
};

export default CurrentUsage;
