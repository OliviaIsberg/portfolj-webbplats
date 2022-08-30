import { Box, Typography, Container, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 8 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="sm">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Link underline="none" href="/" color="white">
                <Typography variant="body1" mt="1rem">
                  Hitta oss
                </Typography>
              </Link>
              <Link underline="none" href="/" color="white">
                <Typography variant="body1" mt=".2rem">
                  Om Agili
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link underline="none" href="/" color="white">
                <Typography variant="body1" mt="1rem" color="white">
                  Kontakta oss
                </Typography>
              </Link>
              <Link underline="none" href="/">
                <Typography variant="body1" mt=".2rem" color="white">
                  Erfarenheter
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href="/">
                <Typography color="#2279d0">
                  <FacebookIcon fontSize="large"></FacebookIcon>
                </Typography>
              </Link>
              <Link href="/">
                <Typography color="white">
                  <GitHubIcon fontSize="large"></GitHubIcon>
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
