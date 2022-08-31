import '../../css/gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div className="galleryContainer">
      <h3>Våra kompetenser på Agili</h3>

      <div className="rollsBoxes">
        <div className="divLink">
          <Link className="galleryLink" to="/skills/DesignPage">
            Designer
          </Link>
        </div>

        <div className="divLink">
          <Link className="galleryLink" to="/skills/ScrumPage">
            Scrummästare
          </Link>
        </div>

        <div className="divLink">
          <Link className="galleryLink" to="/skills/DeveloperPage">
            Utvecklare
          </Link>
        </div>
      </div>
    </div>
  );
}
