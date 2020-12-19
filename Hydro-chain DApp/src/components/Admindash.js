import React, {Component} from 'react';
import Navbar from './Components/Navbar';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fontSize } from '@material-ui/system';

const useStyles = ({
    table: {
      minWidth: 650,
      fontSize: 15
    },
  });

class Admindash extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isadmin: false
        };
    }

    componentWillMount() {
        if(this.props.admin==this.props.account) {
            this.setState({ isadmin: true})
        }
    }

    render() {
        const styleObj = {
            fontSize: 16,
            color: "teal",
            textAlign: "center",
            paddingTop: "100px",
        }
        const styleObj1 = {
            fontSize: 18,
            color: "cornflowerblue",
            textAlign: "center",
            paddingTop: "100px",
        }
        const { classes } = this.props;
        if(this.state.isadmin) {
            return(
                <React.Fragment>
                <Navbar />
                <br/><br/><hr/>
                <h1 style={{fontSize: 30, textAlign: "center",color: "white"}}>Welcome Admin</h1>
                <p style={{fontSize: 26, textAlign: "center"}}>Available user records</p>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell ><span style={styleObj1}>User No</span></TableCell>
                      <TableCell ><span style={styleObj1}>User Address</span></TableCell>
                      <TableCell ><span style={styleObj1}>Units Consumed</span></TableCell>
                      <TableCell ><span style={styleObj1}>Amount Due</span></TableCell>
                      <TableCell ><span style={styleObj1}>Last paid on</span></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.users.map((user, key) => (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                        <span style={styleObj}>{key}</span>
                        </TableCell>
                        <TableCell > <span style={styleObj}>{user.userAddress}</span>
                        </TableCell>
                        <TableCell > <span style={styleObj}>{user.cunits.toString()}</span>
                        </TableCell>
                        <TableCell ><span style={styleObj}>{user.cunits.toString()*0.011} MATIC</span></TableCell>
                        <TableCell ><span style={styleObj}>{user.lastDate}</span></TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              </React.Fragment>
            );
        }
        else {
            window.location.replace("/")
        }
    }
}

export default withStyles(useStyles)(Admindash);