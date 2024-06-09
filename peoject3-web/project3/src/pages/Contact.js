// import React from "react";
// import ContactForm from "../components/ContactForm";

// function Contact() {
//   return (
//     <div>
//       <h2>Contact Page</h2>
//       <ContactForm />
//     </div>
//   );
// }

// export default Contact;
import React from "react";
import ContactForm from "../components/ContactForm";
import { Box, Typography } from "@mui/material";

function Contact() {
  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h4" fontWeight="bold">Contact Page</Typography>
      <ContactForm />
    </Box>
  );
}

export default Contact;
