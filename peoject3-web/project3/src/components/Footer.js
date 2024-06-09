import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./Footer.css"; // Assume Footer.css for styling

function Footer() {
  return (
    <AppBar position="static" className="footer">
      <Toolbar className="footer-toolbar">
        <ul className="left-list">
          <li>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </li>
          <li>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
          </li>
          <li>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
          </li>
          <li>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </li>
        </ul>
        <img
          src="/log.png" // Add your logo source here
          alt="Logo"
          className="logo"
        />
        <span className="copyright">© {new Date().getFullYear()} Gasi Company</span>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
