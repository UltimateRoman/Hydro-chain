import React, { Component } from 'react';
import './App.css';
import home from './Home';
import bill from './Components/bill';
import Web3 from 'web3';
import Hydrochain from '../abis/Hydrochain.json';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should use the MetaMask extension!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Hydrochain.networks[networkId]
    if(networkData) {
      const hydroChain = new web3.eth.Contract(Hydrochain.abi, networkData.address)
      this.setState({ hydroChain })
      const uCount = await hydroChain.methods.uCount().call()
      this.setState({ uCount })
      for (var i = 1; i <= uCount; i++) {
        const user = await hydroChain.methods.users(i).call()
        this.setState({
          users: [...this.state.users, user]
        })
      }
      this.setState({ loading: false})
    } else {
      window.alert('The dapp contract could not be deployed to network')
    }
  }

  initializeUser() {
    this.setState({ loading: true })
    this.state.hydroChain.methods.initializeUser().send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  addUnit(units) {
    this.setState({ loading: true })
    this.state.hydroChain.methods.addUnit(units).send({ from: this.state.account })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  payBill(amount) {
    this.setState({ loading: true })
    this.state.hydroChain.methods.payBill().send({ from: this.state.account, value: amount })
    .once('confirmation', (n, receipt) => {
      this.setState({ loading: false })
      window.location.reload()
    })
  }

  


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      hydroChain: null,
      uCount: 0,
      users: [],
      loading: true
    }
    this.initializeUser = this.initializeUser.bind(this)
    this.addUnit = this.addUnit.bind(this)
    this.payBill = this.payBill.bind(this)

    
  }
    

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={home} />
          <Route exact path="/dashboard" render={props => (
            <React.Fragment>
              { this.state.loading
              ? <center><br/><br/><br/><br/><br/><br/><div class="loader"></div></center>
              : <bill
                account={this.state.account}
                users={this.state.users}
                initializeUser={this.initializeUser}
                addUnit={this.addUnit}
                payBill={this.payBill}
              />
              }
            </React.Fragment>
          )} />      
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
