import React, { Component } from 'react';
import Button1 from '@material-ui/core/Button';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ChartsPage from './chart';
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
            const val =  response.data
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
                <row>
                    <center>
                        <Button1 variant="contained"><h3>REPORT</h3></Button1>&emsp;
                        <Button1 variant="contained" color="primary">
                         <h3>INTEGRATIONS</h3>   
                        </Button1>&emsp;
                        <Button1 variant="contained" color="secondary">
                            <h3>CURRENT MONTH</h3>
                        </Button1>&emsp;
                        <Button1 variant="contained" color="primary">
                            <h3>Delete user</h3>
                        </Button1>&emsp;
                        <Button1 variant="contained" color="seconday" href="#contained-buttons">
                            <h3>LAST QUARTER</h3>
                        </Button1>
                        </center>
                        &emsp;
                        
                        <IconButton color="primary">
                            <ShoppingCartIcon />
                        </IconButton>
                        
                        <center>
                        
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
                </center>
                </row>
                <br /><br />
                <center>
                
                <ChartsPage />
                <br />
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                &emsp;
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>&emsp;
                <Fab variant="extended">
                    <NavigationIcon />
                    <h4>Navigate</h4>
                </Fab>&emsp;
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>&emsp;
                </center>
                <br /><br />
                <br /><br />
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