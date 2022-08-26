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
        bgcolor="#FFF8F8"
        color="black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Link underline="none" href="/" color="black">
                <Typography variant="body1" mt="1rem">
                  Hitta oss
                </Typography>
              </Link>
              <Link underline="none" href="/" color="black">
                <Typography variant="body1" mt=".2rem">
                  Om Agili
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link underline="none" href="/" color="black">
                <Typography variant="body1" mt="1rem" color="black">
                  Kontakta oss
                </Typography>
              </Link>
              <Link underline="none" href="/">
                <Typography variant="body1" mt=".2rem" color="black">
                  Läs mer om våra erfarenheter
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Link href="/">
                <Typography color="blue">
                  <FacebookIcon></FacebookIcon>
                </Typography>
              </Link>
              <Link href="/">
                <Typography color="black">
                  <GitHubIcon></GitHubIcon>
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
