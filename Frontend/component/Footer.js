import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div className="foot">
      <Box
        component="footer"
        sx={{
          backgroundColor: "Black", // Custom background color
          color: "white", // Text color
          padding: "20px 0",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="inherit" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="inherit">
                We are SV company, dedicated to provide the best service for our
                customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="inherit" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="inherit">
                171/7 Arjuna Street, George Town, Chennai
              </Typography>
              <Typography variant="body2" color="inherit">
                Email: Svinfostdio@example.com
              </Typography>
              <Typography variant="body2" color="inherit">
                Phone: +91 6381253302
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="inherit" gutterBottom>
                Follow Us On
              </Typography>
              <Link href="https://www.facebook.com/" color="inherit">
                <Facebook />
              </Link>
              <Link
                href="https://www.instagram.com/"
                color="inherit"
                sx={{ pl: 1, pr: 1 }}
              >
                <Instagram />
              </Link>
              <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="inherit" align="center">
              {"Copyright © "}
              <Link color="inherit" href="https://youtube.com/">
                Your Website
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
