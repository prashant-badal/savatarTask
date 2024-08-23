import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme } from '@mui/material';


import logo from '../images/shirt1.jpg'; // Ensure you have a logo image in your `public` or `src` directory
import { MenuBook, SearchTwoTone } from '@mui/icons-material';

const NavBar=()=> {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Search" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          {isSmallScreen && (
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuBook />
            </IconButton>
          )}
          <Typography variant="h6" style={{ flexGrow: 1, textAlign: isSmallScreen ? 'center' : 'left' }}>
            <img src={logo} alt="Logo" style={{ height: 40 }} />
          </Typography>
          {!isSmallScreen && (
            <div>
              <IconButton color="inherit">
                <SearchTwoTone />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawer}
      </Drawer>
    </div>
  );
}

export default NavBar;
