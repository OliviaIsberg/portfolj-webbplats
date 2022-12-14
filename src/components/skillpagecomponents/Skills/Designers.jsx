import { Box, Button, Typography, CardMedia } from '@mui/material';
import '../../../css/Skills/Skills.css';
import profileRosanna from '../../../Assets/rosanna.png';
import profileSara from '../../../Assets/sara.png';
import { Link } from 'react-router-dom';

export default function Designers() {
  return (
    <Box className="skill-content">
      <Box className="description">
        <Typography
          variant="h4"
          className="title"
          sx={{ marginBottom: '1rem' }}
        >
          Designer
        </Typography>
        <Typography variant="body2">
          Med Rosanna och Sara i spetsen kan ni förvänta er en förstklassig
          design där användarupplevelsen står högt i fokus. Gnistor kommer att
          uppstå när Rosanna och Sara sätter fart inom designens alla verktyg.
          Det är två härliga tjejer som lyhört kommer lyssna på era ideer och
          sedan bistå med gedigen erfarenhet.
        </Typography>
      </Box>
      <Box className="tool-expert-container">
        <Box className="tool-box">
          <Typography variant="h5">Verktyg</Typography>
          <div className="tools">
            <div className="tool">
              <Typography variant="h6">Figma</Typography>
              <Typography variant="body2">
                Med hjälp av Figma får vi snabbt upp en design prototyp av eran
                hemsida. Ett tidsbesparande sätt att arbeta då ni kommer att få
                en bra överblick av hemsidan och kan komma med önskemål.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">Adobe Photoshop</Typography>
              <Typography variant="body2">
                Med Photoshop förbättrar vi bilder, designar, retuscherar och
                skapar montage. Photoshop är gigantiskt, men låt dig inte
                skrämmas, Rosanna och Sara har stenkoll på denna härliga
                djungel.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">Adobe InDesign</Typography>
              <Typography variant="body2">
                När det är dags för att skapa digitalt material och
                tryckprodukter såsom broschyrer, reklamblad samt böcker använder
                vi hos av det kraftfulla verktyget Adobe inDesign för snabbheten
                och enkelheten.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">UX</Typography>
              <Typography variant="body2">
                För att få en användarvänlig hemsida där rätt sak har rätt plats
                kommer upplevelsen på hemsidan vara på topp och inriktad mot
                rätt målgrupp.
              </Typography>
            </div>
          </div>
        </Box>
        <Box className="expert-box">
          <Typography variant="h5">Experter</Typography>
          <div className="expert-description">
            <div className="expert-pic-div">
              <CardMedia
                className="expert-pic"
                component="img"
                src={profileSara}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">SARA LINDQVIST</Typography>
              <Typography variant="body2">
              "Design är intelligens som görs synlig."
              </Typography>
              <Link to="/contact/sara" style={{ textDecoration:'none' }}>
                <Button
                  sx={{
                    border: '#23BE99 solid 0.1rem ',
                    borderRadius: '.5rem',
                    color: 'white',
                    marginTop: '.5rem',
                  }}
                >
                  Kontakta Sara{' '}
                </Button>
              </Link>
            </div>
          </div>
          <div className="expert-description">
            <div className="expert-pic-div">
              <CardMedia
                className="expert-pic"
                component="img"
                src={profileRosanna}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">ROSANNA PISTONE</Typography>
              <Typography variant="body2">
              ”Jag strävar efter två saker i design: enkelhet och tydlighet. Bra design föds ur dessa två."
              </Typography>
              <Link to="/contact/rossana" style={{ textDecoration:'none' }}>
                <Button
                  sx={{
                    border: '#23BE99 solid 0.1rem ',
                    borderRadius: '.5rem',
                    color: 'white',
                    marginTop: '.5rem',
                  }}
                >
                  Kontakta Rosanna{' '}
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
