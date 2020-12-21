import React, { Component } from 'react';
import Button1 from '@material-ui/core/Button';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Navbar from './Components/Navbar'
import ChartsPage from './chart';
import img from './Components/a.png';
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
            this.props.addUnit(Math.round(response.data/200))
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
                
                <div className="container-fluid mt-5">
                <row>
                    <Navbar />
                    <br /><hr /><br/><br/>
                    <center>
                    <h2  style={{color: "white" , fontFamily: "Brush Script MT", fontSize: 100, fontStyle: "normal", fontVariant: "normal", fontWeight: 700}}>Hydro-chain </h2>
                    <br/>
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
                        <p style={{color: "white", fontSize: 20}}>Welcome, {this.state.user.userAddress}</p>
                        <br/><br/>
                        <Button variant="success" onClick={this.setBill}>Update</Button>
                        <br/>
                        <p style={{color: "white", fontSize: 24}}>Units you have consumed:</p>
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <br/>
                                <h1 style={{fontSize: 70}}>{this.state.user.cunits.toString()}</h1>
                                <br/>
                                <h1 style={{fontSize: 50}}>Units</h1>
                            </div>
                            <div class="flip-card-back">
                            </div>
                        </div>
                        </div>
                        <p style={{color: "white", fontSize: 24}}>Amount due:</p>
                        <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front1">
                                <br/>
                                <h1 style={{fontSize: 70}}>{parseInt(this.state.user.cunits.toString())*0.011}</h1>
                                <br/>
                                <h1 style={{fontSize: 50}}>MATIC</h1>
                            </div>
                            <div class="flip-card-back">
                            </div>
                        </div>
                        </div>
                        <br/>
                        <Button variant="info" name="3" onClick={(event) => {
                                  let amount = this.state.user.cunits.toString()*11000000000000000
                                  this.props.payBill(amount)
                        }}>Pay Now</Button>           
                        </div>
                        </main>
                        <br/><br/>                       
                   
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
                    <center>
                    <div className="container-fluid mt-5">
                    <div className="row">
                        <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '500px' }}>
                        <div className="content mr-auto ml-auto">
                        <p>&nbsp;</p>
                        <center>
                        <h1 style={{color: "white"}}>Hydro-chain</h1>
                        <br/>
                        <h2 style={{color: "white"}}>New User detected, Welcome</h2>
                        <br/><br/>
                        <img src={img} />
                        <br/><br/>
                        <Button variant="outline-info" onClick={(event) => {this.props.initializeUser()}}>Add me as New User</Button>
                        </center>
                        </div>
                        </main>
                    </div>
                    </div>
                    </center>
                );
            }
        }
    }

export default Main;