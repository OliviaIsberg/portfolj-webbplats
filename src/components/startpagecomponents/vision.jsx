import "../../css/vision.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import backgroundVideo from "../../Assets/backgroundVideo.mp4";


export default function Vision() {
  return (
    <Box className="vision-container">
      <div className="video-container" style={{width: "100%", height: "100%"}}>
      <video autoPlay loop muted className="video" style={{width: "100%", height: "100%", contain: "size", opacity: "50%"}} >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      </div>
      <div className="visionTextContainer">
        <h2>CREATIVE MINDS. CREATIVE WORKS.</h2>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("We Are Agili.").start();
            }}
          />
        </h1>

        <p className="visionText">
          Vi på Agili anser att alla har rätt till en schysst digital närvaro.
          Vår vision är att tillgodose alla våra kunders önskemål - nya som
          gamla, stora som små. Till skillnad från liknande företag i branschen
          lägger vi stor vikt på enkelhet, transparens och kvalité.
        </p>

        <Link to="contact">
          <button className="bookingButton">BOKA ETT MÖTE</button>
        </Link>
      </div>
    </Box>
  );
}
