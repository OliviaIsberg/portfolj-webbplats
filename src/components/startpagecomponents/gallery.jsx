import "../../css/gallery.css";
import { Link } from "react-router-dom";
import Utvecklare from "../../Assets/utvecklare.jpeg";
import Designer from "../../Assets/designer.jpeg";
import Scrummaster from "../../Assets/scrummaster.jpeg";

export default function Gallery() {
  return (
    <div className="galleryContainer">
      <h3>Våra kompetenser på Agili</h3>

      <div className="rollsBoxes">
        <div className="divLink">
          <img className="linkBox" src={Designer} alt="horse" />
          <Link className="galleryLink" to="/skills/DesignPage">
            Designer
          </Link>
        </div>

        <div className="divLink">
          <img className="linkBox" src={Scrummaster} alt="horse" />
          <Link className="galleryLink" to="/skills/ScrumPage">
            Scrummästare
          </Link>
        </div>

        <div className="divLink">
          <img className="linkBox" src={Utvecklare} alt="horse" />
          <Link className="galleryLink" to="/skills/DeveloperPage">
            Utvecklare
          </Link>
        </div>
      </div>
    </div>
  );
}
