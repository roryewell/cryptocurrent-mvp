import React from 'react';
import { render } from 'react-dom';
import DashboardCryptoEntry from '../DashboardCryptoEntry/index.js';

const divStyle = {
  width: '70%',
  float: 'left',
  height: '100%',
  backgroundColor: 'green',
  color: 'white'
};

const DashboardCyrptoList = (props) => {
  return (
    <div style={divStyle}>
      <ul>
        {props.dashboardCryptoList.map((entry) => {
          return (
            <DashboardCryptoEntry
              key={entry.id}
              cryptoDetails={entry}
            />
          )
        })}
      </ul>
    </div>
  );
};

export default DashboardCyrptoList;
