import React, { useState } from "react";
import { Button, Box, Typography, CardContent, Grid, createTheme, ThemeProvider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#689F38', // Custom primary color
    },
    secondary: {
      main: '#fff', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Custom font family
    fontSize: 14, // Custom base font size
  },
  // Add more customizations as needed
});

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <ThemeProvider theme={theme}> {/* Apply custom theme */}
      <Grid container spacing={2} className="container1" style={{ padding: "20px", borderRadius: "10px" }}>
        <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <img 
            src="/caj.png" 
            alt="My React App Logo" 
            className="caj1" 
            style={{
              width: "100%", // Default size
              
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CardContent className="text-container">
            <Typography variant="h3" component="div" className="tekst1">
              Let's Embrace<br />
              A Healthier<br />
              Lifestyle for<br />
              A Better Future!
            </Typography>
            <Typography variant="body1" className="tekst2">
            At our store, we believe in the importance of community and environmental stewardship.            </Typography>
            <div className="shop-now">
            <Button
              component={Link}
              to="/products"
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faShoppingCart} />}
            >
              Shop now
            </Button>
          </div>
          </CardContent>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Home;
