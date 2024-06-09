import React, { useState } from "react";
import { Box, Typography, Grid, createTheme, ThemeProvider } from "@mui/material";

function Products() {
  const [products] = useState([
    { name: "Fresh Coffee", image: "/cofffee.jpg", price: "$10" },
    { name: "Cashew Butter", image: "/cashew.jpg", price: "$20" },
    { name: "Raw Honey", image: "/honey.jpg", price: "$30" },
    { name: "Diabetic Cookies", image: "/diabetic.jpg", price: "$40" },
    { name: "Juiced Oil", image: "/oil.jpg", price: "$50" },
    { name: "Red Chillis", image: "/redchillis.jpg", price: "$60" },
    { name: "Face Washer", image: "/face.jpg", price: "$70" },
    { name: "Pulses", image: "/pulses.jpg", price: "$80" },
    { name: "Sanitizer", image: "/sanitizer.jpg", price: "$90" },
  ]);

  return (
    <ThemeProvider theme={theme}> {/* Apply custom theme */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4">Products Page</Typography>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <Box sx={{ padding: 2 }}>
                <img src={product.image} alt={product.name} style={{ width: "100%" }} />
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">{product.price}</Typography>
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
      main: '#689F38', // Custom primary color
    },
    secondary: {
      main: '#fff', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Custom font family
    fontSize: 16, // Custom base font size
  },
  // Add more customizations as needed
});

export default Products;
