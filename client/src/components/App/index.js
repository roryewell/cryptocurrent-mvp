import React from 'react';
import { render } from 'react-dom';
import CryptoSelectorList from '../CryptoSelectorList/index.js';
import DashboardCryptoList from '../DashboardCryptoList/index.js';
import axios from 'axios';
import Promise from 'bluebird';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoSelectorList: [],
      dashboardCryptoList: []
    }
  }
  componentDidMount() {
    this.getCryptoSelectorList();
  }
  getCryptoSelectorList() {
    axios.get('http://localhost:5123/crypto-selector-list')
      .then((response) => {
        const cryptoList = response.data.map((crypto) => {
          return { id: crypto.id, name: crypto.name };
        });
        this.setState({
          cryptoSelectorList: cryptoList
        });
      })
      .catch((err) => {
        console.log('Error fetching crypto list: ', err);
      });
  }
  getCryptoEntryDetail(cryptoId) {
    axios.get(`http://localhost:5123/crypto/${cryptoId}`)
      .then((response) => {
        if (response.data[0].percent_change_24h >= 0) {
          response.data[0].statusColor = '#32CD32';
        } else {
          response.data[0].statusColor = 'red';
        }
        this.setState({
          dashboardCryptoList: [...this.state.dashboardCryptoList, response.data[0]].sort((a, b) => a.rank - b.rank)
        });
      })
      .catch((err) => {
        console.log('Error fetching crypto details: ', err);
      });
  }
  handleSelectorToggle(event, key) {
    if (event.target.checked) {
      this.getCryptoEntryDetail(key);
    } else {
      this.setState({
        dashboardCryptoList: this.state.dashboardCryptoList.filter((crypto) => {
          return crypto.id !== key;
        })
      });
    }
  }
  render() {
    return (
      <div>
        <CryptoSelectorList
          cryptoSelectorList={this.state.cryptoSelectorList}
          handleSelectorToggle={this.handleSelectorToggle.bind(this)}
        />
        <DashboardCryptoList
          dashboardCryptoList={this.state.dashboardCryptoList}
        />
      </div>
    );
  }
}

export default App;
