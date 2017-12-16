import React from 'react';
import { render } from 'react-dom';
import CryptoSelectorEntry from '../CryptoSelectorEntry/index.js';

const divStyle = {
  width: '30%',
  float: 'left',
  height: '100%',
  paddingTop: '30px'
};

const CryptoSelectorList = (props) => {
  return (
    <div style={divStyle}>
      <form>
        {props.cryptoSelectorList.map((entry) => {
          return (
            <CryptoSelectorEntry
              key={entry.id}
              id={entry.id}
              cryptoEntry={entry.name}
              handleSelectorToggle={props.handleSelectorToggle}
            />
          )
        })}
      </form>
    </div>
  );
};

export default CryptoSelectorList;
