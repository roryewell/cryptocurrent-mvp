import React from 'react';
import { render } from 'react-dom';
import CryptoSelectorEntry from '../CryptoSelectorEntry/index.js';

const divStyle = {
  width: '30%',
  float: 'left',
  height: '100%',
  backgroundColor: 'red',
  color: 'white'
};

const CryptoSelectorList = (props) => {
  return (
    <div style={divStyle}>
      <form>
        {props.cryptoSelectorList.map((entry) => {
          return (
            <CryptoSelectorEntry
              cryptoEntry={entry}
            />
          )
        })}
      </form>
    </div>
  );
};

export default CryptoSelectorList;
