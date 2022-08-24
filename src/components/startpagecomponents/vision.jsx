import '../../css/vision.css';
import {Button} from "@mui/material";

export default function Vision() {
    return (
        <div className="visionContainer">
            <div className="visionTextContainer">
                <h5>Vi på Agili anser att alla har rätt till en schysst digital närvaro.
                    Vår vision är att tillgodose alla våra kunders önskemål - nya som gamla, stora som små.
                    Till skillnad från liknande företag i branschen lägger vi stor vikt på enkelhet, transparens och
                    kvalité.</h5>
            </div>
            <Button variant="contained">Boka ett möte</Button>
        </div>
    )
}