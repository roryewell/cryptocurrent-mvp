import React from 'react';
import { render } from 'react-dom';
import CryptoSelectorList from '../CryptoSelectorList/index.js';
import DashboardCryptoList from '../DashboardCryptoList/index.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoSelectorList: ['rory', 'joe', 'pryce']
    }
  }
  render() {
    return (
      <div>
        <CryptoSelectorList cryptoSelectorList={this.state.cryptoSelectorList}
        />
        <DashboardCryptoList
        />
      </div>
    );
  }
}

export default App;
