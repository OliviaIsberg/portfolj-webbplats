import "../../css/vision.css";
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <div className="visionContainer">
      <div className="visionTextContainer">
        <h2>CREATIVE MINDS. CREATIVE WORKS.</h2>
        <h1>We Are Agili.</h1>
        <p className="visionText">
          Vi på Agili anser att alla har rätt till en schysst digital närvaro.
          Vår vision är att tillgodose alla våra kunders önskemål - nya som
          gamla, stora som små. Till skillnad från liknande företag i branschen
          lägger vi stor vikt på enkelhet, transparens och kvalité.
        </p>
      </div>
      <Link to="contact">
        <button className="bookingButton">BOKA ETT MÖTE</button>
      </Link>
    </div>
  );
}
