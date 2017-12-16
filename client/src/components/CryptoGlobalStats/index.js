import React from 'react';
import { render } from 'react-dom';
import ReactTable from 'react-table';

const divStyle = {
  width: '25%',
  float: 'right',
  paddingTop: '30px',
  margin: '0 auto',
};

const thStyle = {
  paddingRight: '20px',
  textAlign: 'left',
  color: '#b4bac1'
};

const tdStyle = {
  color: 'white'
}

const CryptoGlobalStats = (props) => {
  return (
    <div style={divStyle}>
      <table>
        <tr>
          <th style={thStyle}>Total Market Cap (USD)</th>
          <th style={thStyle}>Active Coins</th>
        </tr>
        <tr>
          <td style={tdStyle}>{props.cryptoGlobalStats.total_market_cap_usd}</td>
          <td style={tdStyle}>{props.cryptoGlobalStats.active_currencies}</td>
        </tr>
      </table>
    </div>
  );
};


export default CryptoGlobalStats;
