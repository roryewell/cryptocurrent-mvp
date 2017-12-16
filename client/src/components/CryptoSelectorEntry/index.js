import React from 'react';
import { render } from 'react-dom';

const labelStyle = {
  display: 'block',
  paddingLeft: '45%',
  color: '#b4bac1'
};

const CryptoSelectorEntry = (props) => {
  return (
    <div>
      <label style ={labelStyle}>
        <input
          name={props.cryptoEntry}
          type="checkbox"
          onChange={(event) => props.handleSelectorToggle(event, props.id)}
        />
        {props.cryptoEntry}
      </label>
      <br />
    </div>
  );
};

export default CryptoSelectorEntry;
