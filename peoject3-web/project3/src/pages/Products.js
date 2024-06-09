import React, { useState } from "react";
import { Box, Typography, Grid, createTheme, ThemeProvider } from "@mui/material";

function Products() {
  const [products] = useState([
    { type: "Beverage", name: "Fresh Coffee", image: "/cofffee.jpg", price: "$10" },
    { type: "Spread", name: "Cashew Butter", image: "/cashew.jpg", price: "$20" },
    { type: "Sweetener", name: "Raw Honey", image: "/honey.jpg", price: "$30" },
    { type: "Snack", name: "Diabetic Cookies", image: "/diabetic.jpg", price: "$40" },
    { type: "Oil", name: "Juiced Oil", image: "/oil.jpg", price: "$50" },
    { type: "Grain", name: "Red Chillis", image: "/redchillis.jpg", price: "$60" },
    { type: "Hygiene", name: "Face Washer", image: "/face.jpg", price: "$70" },
    { type: "Grain", name: "Pulses", image: "/pulses.jpg", price: "$80" },
    { type: "Hygiene", name: "Sanitizer", image: "/sanitizer.jpg", price: "$90" },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>Products Page</Typography>
        <Typography variant="body1" gutterBottom>
          Discover our range of products that are carefully sourced to provide you with the best quality and health benefits. Whether you're looking for a healthy snack or a daily essential, we have something for everyone.
        </Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Box 
                sx={{ 
                  padding: 2, 
                  textAlign: 'center', 
                  backgroundColor: 'rgba(128, 128, 128, 0.1)', 
                  borderRadius: 2,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                  marginBottom: 2, // Added margin bottom
                }}
              >
                <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                <Typography variant="body2" sx={{ color: 'gray' }}>{product.type}</Typography>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1" sx={{ color: 'gray' }}>{product.price}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

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
    fontSize: 16, 
  },
});

export default Products;
