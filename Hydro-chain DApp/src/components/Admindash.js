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
            fontSize: 14,
            color: "teal",
            textAlign: "center",
            paddingTop: "100px",
        }
        const { classes } = this.props;
        if(this.state.isadmin) {
            return(
                <React.Fragment>
                <Navbar />
                <br/><br/>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell >User</TableCell>
                      <TableCell >User Address</TableCell>
                      <TableCell >Units due</TableCell>
                      <TableCell >Last paid on</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.props.users.map((user, key) => (
                      <TableRow key={key}>
                        <TableCell component="th" scope="row">
                          {key}
                        </TableCell>
                        <TableCell > <span style={styleObj}>{user.userAddress}</span>
                        </TableCell>
                        <TableCell > <span style={styleObj}>{user.cunits.toString()}</span>
                        </TableCell>
                        <TableCell >{user.cunits.toString()}</TableCell>
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