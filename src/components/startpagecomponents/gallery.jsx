import '../../css/gallery.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Gallery() {
  return (
    <div className="galleryContainer">
      <h3>Våra kompetenser på Agili</h3>

      <div className="rollsBoxes">
        <div className="divLink">
          <Link className="galleryLink" to="skills">
            Designer
          </Link>
        </div>

        <div className="divLink">
          <Link className="galleryLink" to="skills">
            Scrummästare
          </Link>
        </div>

        <div className="divLink">
          <Link className="galleryLink" to="skills">
            Utvecklare
          </Link>
        </div>
      </div>
    </div>
  );
}
