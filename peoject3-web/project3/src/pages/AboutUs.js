import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, createTheme, ThemeProvider, Button } from "@mui/material";
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

function AboutUs() {
  const [info, setInfo] = useState("Fetching data...");
  const [imageSrc, setImageSrc] = useState(null);
  const [storeInfo, setStoreInfo] = useState("");
  const [buttonConfig, setButtonConfig] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setStoreInfo("We Are Your Favorite Store");

      setInfo(
        "At our store, we believe in the importance of community and environmental stewardship. That's why we work closely with local farmers and suppliers who share our values of integrity, sustainability, and social responsibility. Join us in supporting local agriculture and enjoying the freshest, most flavorful products available. Visit our store today and discover the difference of shopping with us!"
      );

      // For the image
      setTimeout(() => {
        setImageSrc("./banner.jpg");
      }, 2000);

      // For the button
      setButtonConfig(
        <Button
          component={Link}
          to="/products"
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
        >
          View Products
        </Button>
      );
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}> {/* Apply custom theme */}
      <Grid container spacing={2} className="about-us-container" sx={{ mt: 3 }}>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" sx={{ marginBottom: 2 }}>
            About Us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Box sx={{ flex: 1, padding: 2 }}>
              <Typography variant="h4" sx={{ marginBottom: 1 }}>
                {storeInfo}
              </Typography>
              <Typography variant="body1">{info}</Typography>
              {/* Render button */}
              {buttonConfig}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
            <Box className="image-container">
              {imageSrc && <img src={imageSrc} alt="About Us" style={{ maxWidth: "100%" }} />}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default AboutUs;
