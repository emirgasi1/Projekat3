// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>My React App</h1>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/products">Products</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
import "./Navbar.css";

function Navbar() {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <img
          src="/log.png"
          alt="My React App Logo"
          style={{ width: '200px', height: 'auto' }}
        />
        <ul className="navbar-list">
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
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
