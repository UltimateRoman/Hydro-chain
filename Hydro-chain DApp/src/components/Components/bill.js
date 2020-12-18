import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import b from './b.jpg'
import Rating from '@material-ui/lab/Rating';
import {Button} from 'reactstrap';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Navbar/>
      <center>
      <Card className={classes.root}>
        <h2 style={{color:"darkblue"}}>PAY YOUR BILL</h2>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={b}
            title="bil"
          />
          <CardContent>
            
            <h4>Your account number :</h4>
            <h4>Water consumption :</h4>
            <h4>Amount  :</h4>
            <h4>Amount payable :</h4>
          </CardContent>
        </CardActionArea>
          
          
      </Card>
      &emsp;&emsp;
      <Button type="button"  className="btn btn-block waves-effect waves-light btn-outline-primary m-b-30">
          <h2 style={{color:"black"}}>PAY</h2>
      </Button>
      <Box component="fieldset" mb={3} borderColor="transparent">
          <h5 style={{color:"white"}}>Rate your experience with Hydrochain</h5>
          <Rating/>
        </Box>
      </center>
    </React.Fragment>
  );
}
