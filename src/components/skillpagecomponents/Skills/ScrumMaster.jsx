import { Box, Button, Typography, CardMedia } from "@mui/material";
import "../../../css/Skills/Skills.css";
import profileRosanna from "../../../Assets/rosanna.png";

export default function ScrumMaster() {
  return (
    <Box className="skill-content">
      <Box className="description">
        <Typography
          variant="h3"
          className="title"
          sx={{ marginBottom: "1rem" }}
        >
          Scrum Master
        </Typography>
        <Typography variant="body1">
          Med hjälp av vår Scrum Master Simon kommer teamet få all hjälp de
          behöver för att kunna starta projekt och bygga en så bra grund som
          möjligt. Detta, för att få en så bra slutprodukt det bara går. Med sin
          erfarenhet lyser Simon som en stjärna i projekten.
        </Typography>
      </Box>
      <Box className="tool-expert-container">
        <Box className="tool-box">
          <Typography variant="h4">Our Tools</Typography>
          <div className="tools">
            <div className="tool">
              <Typography variant="h5">Agila metoder</Typography>
              <Typography variant="body1">
                Tillsammans med Simon säkerställs våra behov att arbeta
                effektivt genom agila metoder. Med år av erfarenhet och en
                bakgrund inom storskalig applikationsutveckling jobbar vi som
                Team effektivt samtidigt som vi ger kunden transparens i hur
                arbetet går.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h5">SCRUM</Typography>
              <Typography variant="body1">
                Inom Agila metoder arbetar vi oftast med SCRUM och vi arbetar
                oftast med två veckors sprintar, vilket innebär att ni som kund
                kan förvänta er en bättre produkt varje två veckor samt god
                insyn till hur projektet går.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h5">Kanban</Typography>
              <Typography variant="body1">
                Med Kanban ordnar och strukturerar vi vårt arbete tydligt med
                prioritering. Arbetet flyter som smält smör på en varm
                rutschkana i rostfritt stål. Genom onlineverktyg kan ni som kund
                få transparens på tillvaron och se hur arbetet struktureras och
                genomförs.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h5">Jira</Typography>
              <Typography variant="body1">
                Jira används flitigt inom vår organisation och vi använder
                nästan alla funktioner som finns för att effektivisera och dela
                upp vårt arbete för varje dagligt scrummöte och två veckors
                sprintar. Med Simon som expert är det honom ni skall vända er
                till vid frågor.
              </Typography>
            </div>
          </div>
        </Box>
        <Box className="expert-box">
          <Typography variant="h4">Our Experts</Typography>
          <div className="expert-description">
            <div className="expert-pic-div">
              <CardMedia
                className="expert-pic"
                component="img"
                src={profileRosanna}
                sx={{ width: "10rem" }}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">SIMON ERIKSSON</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Button
                sx={{
                  border: "#23BE99 solid 0.1rem ",
                  borderRadius: ".5rem",
                  color: "white",
                  marginTop: ".5rem",
                }}
              >
                Contact Simon{" "}
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
