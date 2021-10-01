import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger';


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

export default function Header(props) {
    return (
        <ElevationScroll>
        <AppBar position="fixed">
           <ToolBar>
                CIVWARE   
            </ToolBar> 
        </AppBar>
        </ElevationScroll>
    )

}