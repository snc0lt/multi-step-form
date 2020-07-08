import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    marginTop: 20
  },
  paper: {
    margin: '30px auto',
    width: '30%',
    height: '60vh'
  }
}));

function PersonalDetails({ values: {name, lastName, email, occupation, city, bio}, handleChange, nextStep, prevStep }) {
  const classes = useStyles()

  const nextForm = (e) => {
    e.preventDefault()
    console.log({name, lastName, email, occupation, bio, city})
    nextStep()
  }
  const prevForm = (e) => {
    e.preventDefault()
    prevStep()
  }
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Confirm User Data
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Paper className={classes.paper}>
        <List>
          <ListItem>
            <ListItemText primary='Name' secondary={name} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Last Name' secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Email' secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary='City' secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Occupation' secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary='Bio' secondary={bio} />
          </ListItem>
        </List>
        <br />
        <Button variant="contained" 
        style={{margin: 30}} onClick={prevForm}>
          prev
        </Button>
        <Button variant="contained" color="primary" 
        style={{margin: 30}} onClick={nextForm}>
          Confirm and Next
        </Button>
      </Paper>

    </>
  )
}

export default PersonalDetails
