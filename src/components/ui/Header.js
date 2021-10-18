import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';

import logo from '../../assets/logo.png';


function ElevationScroll(props: Props) {
    const { children } = props;
  
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em"
  },
  logo: {
    height: "3em"
  }

}))

export default function Header(props) {
  const classes = useStyles()
    return (
      <>
        <ElevationScroll>
        <AppBar position="fixed" color="secondary">          
           <Toolbar disableGutters>
            <img src={logo} alt="civware logo" 
              className={classes.logo}/>            
           </Toolbar>          
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
      </>
    )

}