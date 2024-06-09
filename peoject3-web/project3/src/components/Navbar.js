import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Link to="/">
          <img
            src="/log.png"
            alt="My React App Logo"
            style={{ width: '150px', height: 'auto' }} // Adjusted width to make the logo smaller
          />
        </Link>
        <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
          <Grid item>
            <Button color="inherit" component={Link} to="/" sx={{ fontSize: '0.875rem' }}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/about" sx={{ fontSize: '0.875rem' }}>
              About
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/products" sx={{ fontSize: '0.875rem' }}>
              Products
            </Button>
          </Grid>
          <Grid item>
            <Button color="inherit" component={Link} to="/contact" sx={{ fontSize: '0.875rem' }}>
              Contact
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
