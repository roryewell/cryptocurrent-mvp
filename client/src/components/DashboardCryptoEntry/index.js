import React from 'react';
import { render } from 'react-dom';

const boxStyle = {
  width: '60%',
  margin: '10px auto 20px auto',
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  borderRadius: '5px',
  paddingBottom: '20px'
};

const titleStyle = {
  display: 'inline-block',
  paddingLeft: '10px'
};

const rowStyle = {
  paddingLeft: '10px'
};

const DashboardCryptoEntry = (props) => {
  return (
    <div style={boxStyle}>
      <div style={titleStyle}>
        <h2>{`${props.cryptoDetails.name} (${props.cryptoDetails.symbol})`}</h2>
      </div>
      <div style={rowStyle}>
        <strong>Rank:</strong> {props.cryptoDetails.rank}
      </div>
      <div style={rowStyle}>
        <strong>Price (USD):</strong> {'$' + props.cryptoDetails.price_usd.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
      </div>
      <div style={rowStyle}>
        <strong>Market Cap (USD):</strong> {'$' + props.cryptoDetails.market_cap_usd.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}
      </div>
      <div style={Object.assign({}, rowStyle, { backgroundColor: props.cryptoDetails.statusColor })}>
        <strong>Change (24h):</strong> {props.cryptoDetails.percent_change_24h + '%'}
      </div>
    </div>
  );
};

export default DashboardCryptoEntry;
