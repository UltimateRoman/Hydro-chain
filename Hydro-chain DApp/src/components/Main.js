import React, { Component } from 'react';
import bill from './Components/bill';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null,
          isuser: false,
          val: 0
        };
        this.setBill = this.setBill.bind(this);
    }

    async setBill(event) {
        axios.get('http://192.168.1.14/')
        .then(response => {
            const val = await response.data
            this.setState({val})
        })
        this.props.addUnit(this.state.val)
    }

    componentWillMount() {
        this.props.users.map((user, key) => {
            if(user.userAddress==this.props.account) {
                this.setState({ user })
                this.setState({ isuser: true})
            }
            }
        )
    }

    render() {
        if (this.state.isuser) {
            return (
                <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                        <div className="content mr-auto ml-auto">
                        <p>&nbsp;</p>
                        <center>
                        <p style={{color: "white"}}>Welcome, {this.state.user.userAddress}</p>
                        <h2 style={{color: "white"}}>Hydro-chain</h2>
                        <br/><br/>
                        <Button variant="outline-info" onClick={this.setBill}>Update</Button>
                        <br/><br/>
                        <p style={{color: "white"}}>Units you have consumed: {this.state.user.cunits.toString()} units</p>
                        <p style={{color: "white"}}>Amount due: {parseInt(this.state.user.cunits.toString())*0.01} ETH</p>
                        <Button variant="info" name="3" onClick={(event) => {
                                  let amount = this.state.user.cunits.toString()*10000000000000000
                                  this.props.payBill(amount)
                        }}>Pay Now</Button>                 
                        </center>
                        </div>
                  </main>
                </div>
              </div>
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