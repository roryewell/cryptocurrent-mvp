import React from 'react';
import { render } from 'react-dom';

const DashboardCryptoEntry = (props) => {
  return (
    <li>
        {props.cryptoDetails.name}
    </li>
  );
};

export default DashboardCryptoEntry;
