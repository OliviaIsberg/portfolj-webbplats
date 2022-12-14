import { Box, Button, Typography, CardMedia } from '@mui/material';
import '../../../css/Skills/Skills.css';
import profileAnna from '../../../Assets/anna.png';
import profileMax from '../../../Assets/max.png';
import profileOlivia from '../../../Assets/olivia.png';
import { Link } from 'react-router-dom';
export default function Developers() {
  return (
    <Box className="skill-content">
      <Box className="description">
        <Typography
          variant="h4"
          className="title"
          sx={{ marginBottom: '1rem' }}
        >
          Utvecklare
        </Typography>
        <Typography variant="body2">
          Med vårt härliga developer team skapas funktionella plattformar
          präglade av snabbhet, logik och finess. Teamet arbetar ständigt under
          mottot: ingenting är omöjligt. Koden har inga begränsningar, endast
          kunden sätter gränsen.
        </Typography>
      </Box>
      <Box className="tool-expert-container">
        <Box className="tool-box">
          <Typography variant="h5">Verktyg</Typography>
          <div className="tools">
            <div className="tool">
              <Typography variant="h6">JavaScript</Typography>
              <Typography variant="body2">
                Inom vår grupp av utvecklare har vi år av erfarenhet, projekt
                och djupa kunskaper i allt vad gäller javascript. Vi har
                E-Commerce, Native Mobile Development och apputveckling i vårt
                bälte och räknar med att fylla alla våra kunders behov. Olivia
                är vår expert och hon kan svara på alla frågor relaterade till
                JavaScript.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">React</Typography>
              <Typography variant="body2">
                Allt som skapas skall alltid vara snabbt, lätt att ladda och
                responsivt, för att åstadkomma detta behöver React, och med
                Agili så har vi er rygg. Vi kan skapa varenda komponent som du
                någonsin kan tänka dig och mer. Med Anna kan ni känna er trygga
                och ni kan vända er till henne om ni har några frågor.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">Git</Typography>
              <Typography variant="body2">
                Att jobba tillsammans är ett måste för varje grupp och att jobba
                effektivt är ett krav för Agili, med Max som vår Git expert så
                undviker vi alla kod konflikter och kan fokusera på att jobba
                effektivt och snabbt. Då kan ni även se över hur långt projektet
                har kommit varje steg i processen.
              </Typography>
            </div>
            <div className="tool">
              <Typography variant="h6">MongoDB</Typography>
              <Typography variant="body2">
                Nästan alla projekt kräver en backend, och nästan alla backends
                kräver en databas, tillsammans med MongoDB så kan vi spara och
                hantera allting som en användare på er hemsida någonsin kan
                önska skicka vår väg. Här leder Max med framfoten igen och är
                alltid trevlig och öppen på frågor.
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
                src={profileMax}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">MAX ANDERSSON</Typography>
              <Typography variant="body2">
              "Programmering är att bryta en stor omöjlig uppgift i flera mycket små möjliga uppgifter."
              </Typography>

              <Link to="/contact/max" style={{ textDecoration:'none' }}>
                <Button
                  sx={{
                    border: '#23BE99 solid 0.1rem ',
                    borderRadius: '.5rem',
                    color: 'white',
                    marginTop: '.5rem',
                  }}
                >
                  Kontakta Max{' '}
                </Button>
              </Link>
            </div>
          </div>
          <div className="expert-description">
            <div className="expert-pic-div">
              <CardMedia
                className="expert-pic"
                component="img"
                src={profileOlivia}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">OLIVIA ISBERG</Typography>
              <Typography variant="body2">
                "Först lösa problemet. Skriv sedan koden."
              </Typography>
              <Link to="/contact/olivia" style={{ textDecoration:'none' }}>
                <Button
                  sx={{
                    border: '#23BE99 solid 0.1rem ',
                    borderRadius: '.5rem',
                    color: 'white',
                    marginTop: '.5rem',
                  }}
                >
                  Kontakta Olivia{' '}
                </Button>
              </Link>
            </div>
          </div>
          <div className="expert-description">
            <div className="expert-pic-div">
              <CardMedia
                className="expert-pic"
                component="img"
                src={profileAnna}
              />
            </div>
            <div className="expert-desc">
              <Typography variant="subtitle1">ANNA ÖZMEHAK</Typography>
              <Typography variant="body2">
              "Programmering är en konstart som slår tillbaka."
              </Typography>

              <Link to="/contact/anna" style={{ textDecoration:'none' }}>
                <Button
                  sx={{
                    border: '#23BE99 solid 0.1rem ',
                    borderRadius: '.5rem',
                    color: 'white',
                    marginTop: '.5rem',
                  }}
                >
                  Kontakta Anna{' '}
                </Button>
              </Link>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
