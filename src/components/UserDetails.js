import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { TextField, Paper } from '@material-ui/core';

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
    margin: '50px auto',
    width: '30%',
    height: '60vh'
  }
}));

function UserDetails({ values, handleChange, nextStep }) {
  const classes = useStyles()

  const nextForm = (e) => {
    e.preventDefault()
    nextStep()
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
              Enter User Details
          </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Paper className={classes.paper}>
        <TextField
          className={classes.input}
          onChange={handleChange('name')}
          defaultValue={values.name}
          label="First Name"
          variant="outlined" />
        <br />
        <TextField
          className={classes.input}
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          label="Last Name"
          variant="outlined" />
        <br />
        <TextField
          className={classes.input}
          onChange={handleChange('email')}
          defaultValue={values.email}
          label="Email"
          variant="outlined" />
        <br />
        <Button variant="contained" color="primary" 
        style={{margin: 30}} onClick={nextForm}>
          Next
        </Button>
      </Paper>

    </>
  )
}

export default UserDetails
