import React from 'react';
import { render } from 'react-dom';
import CryptoSelectorList from '../CryptoSelectorList/index.js';
import DashboardCryptoList from '../DashboardCryptoList/index.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoSelectorList: []
    }
  }
  componentDidMount() {
    this.getCryptoSelectorList();
  }
  getCryptoSelectorList() {
    axios.get('http://localhost:5123/crypto-selector-list')
      .then((response) => {
        const cryptoList = response.data.map((crypto) => {
          return crypto.id;
        });
        this.setState({
          cryptoSelectorList: cryptoList
        });
      })
      .catch((err) => {
        console.log('Error fetching crypto list: ', err);
      });
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
