import React from 'react';
import { render } from 'react-dom';
import DashboardCryptoEntry from '../DashboardCryptoEntry/index.js';

const divStyle = {
  width: '40%',
  float: 'left',
  height: '100%'
};

const DashboardCyrptoList = (props) => {
  return (
    <div style={divStyle}>
      {props.dashboardCryptoList.map((entry) => {
        return (
          <DashboardCryptoEntry
            key={entry.id}
            cryptoDetails={entry}
          />
        )
      })}
    </div>
  );
};

export default DashboardCyrptoList;
