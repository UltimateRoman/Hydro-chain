import React, { Component} from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { fontSize } from '@material-ui/system';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          isuser: false
        };
        this.setBill = this.setBill.bind(this);
    }

    setBill() {
        axios.get('http://192.168.1.14/')
        .then(response => {
            this.props.addUnit(Math.round(response.data/100))
        })
    }

    componentWillMount() {
        this.props.users.map((user, key) => {
            if(user.userAddress==this.props.account) {
                this.setState({ user })
                this.setState({ isuser: true})
            }
        })
    }

    render() {

        if (this.state.isuser) {
            return (
                <center>
                <div className="container-fluid mt-5">
                    <div className="row">
                        <Navbar />
                        <br/><hr/><br/>
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                        <div className="content mr-auto ml-auto">
                        <p>&nbsp;</p>
                        <p style={{color: "white", fontSize: 15}}>Welcome, {this.state.user.userAddress}</p>
                        <h2 style={{color: "white"}}>Hydro-chain</h2>
                        <br/><br/>
                        <Button variant="outline-info" onClick={this.setBill}>Update</Button>
                        <br/><br/>
                        <p style={{color: "white", fontSize: 24}}>Units you have consumed: {this.state.user.cunits.toString()} units</p>
                        <br/><br/>
                        <p style={{color: "white", fontSize: 24}}>Amount due: {parseInt(this.state.user.cunits.toString())*0.015} ETH</p>
                        <br/>
                        <Button variant="info" name="3" onClick={(event) => {
                                  let amount = this.state.user.cunits.toString()*15000000000000000
                                  this.props.payBill(amount)
                        }}>Pay Now</Button>           
                        </div>
                        </main>
                        <br/><br/>
                        <hr/>
                        <Footer />
                    </div>
                </div>
                </center>  
            );}
            else {
                return (
                    <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                        <div className="content mr-auto ml-auto">
                        <p>&nbsp;</p>
                        <center>
                        <h1 style={{color: "white"}}>Hydro-chain</h1>
                        <br/><br/>
                        <Button variant="outline-info" onClick={(event) => {this.props.initializeUser()}}>Add me as New User</Button>
                        </center>
                        </div>
                        </main>
                    </div>
                    </div>
                );
            }
        }
    }

export default Main;