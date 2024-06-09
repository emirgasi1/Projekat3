import React, { useState } from "react";
import { Button, Box, Typography, CardContent, Grid, createTheme, ThemeProvider, Card, CardMedia } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#689F38', 
    },
    secondary: {
      main: '#fff', 
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 14, 
  },
});

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <ThemeProvider theme={theme}> 
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
              At our store, we believe in the importance of community and environmental stewardship.           
            </Typography>
            <div className="shop-now" style={{ marginTop: "70px" }}> {/* Added marginTop */}
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
      {/* Section for best selling products */}
      <Box mt={4} textAlign="center">
        <Typography variant="h4" gutterBottom>Best Selling Products</Typography>
        <Grid container spacing={2}>
          {/* First product */}
          <Grid item xs={12} sm={4}>
            <Card 
              sx={{ 
                transition: 'transform 0.3s ease-in-out', 
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                marginBottom: 2
              }}
            >
              <Link to="/products">
                <CardMedia
                  component="img"
                  height="auto" // Adjusted height
                  image="/cashew.jpg"
                  alt="Product 1"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cashew Butter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $20
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Second product */}
          <Grid item xs={12} sm={4}>
            <Card 
              sx={{ 
                transition: 'transform 0.3s ease-in-out', 
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                marginBottom: 2
              }}
            >
              <Link to="/products">
                <CardMedia
                  component="img"
                  height="auto" // Adjusted height
                  image="/diabetic.jpg"
                  alt="Product 2"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Diabetic Cookies
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $40
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Third product */}
          <Grid item xs={12} sm={4}>
            <Card 
              sx={{ 
                transition: 'transform 0.3s ease-in-out', 
                '&:hover': {
                  transform: 'scale(1.02)',
                },
                marginBottom: 2
              }}
            >
              <Link to="/products">
                <CardMedia
                  component="img"
                  height="auto" // Adjusted height
                  image="/cofffee.jpg"
                  alt="Product 3"
                />
              </Link>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Fresh Coffee
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  $10
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
