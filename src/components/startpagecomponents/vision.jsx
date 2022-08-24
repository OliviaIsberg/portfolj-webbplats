import '../../css/vision.css';
import {Button} from "@mui/material";

export default function Vision() {
    return (
        <div className="visionContainer">
            <div className="visionTextContainer">
                <h5>At Agili we believe that everyone has the right to a nice digital presence.
                    Our vision is to satisfy all our customer' wishes - new and old, big and small.
                    Unlike similar companies in the industry, we place a great value on simplicity,
                    transparency and quality.</h5>
            </div>
            <Button variant="contained">Book a meeting</Button>
        </div>
    )
}