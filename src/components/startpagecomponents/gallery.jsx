import '../../css/gallery.css';
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Gallery() {
    return (
        <div className="galleryContainer">
            <h3>Roller</h3>

            <div className="rollsBoxes">
                <Link to="skills">
                    <Box component="Button" sx={{ height: 300, marginLeft: 4, backgroundColor: 'lightblue'}}>Scrum master</Box>
                </Link>
                <Link to="skills">
                    <Box component="Button" sx={{ height: 300, marginLeft: 4, backgroundColor: 'pink'}}>Designer</Box>
                </Link>
                <Link to="skills">
                    <Box component="Button" sx={{ height: 300, marginLeft: 4, backgroundColor: 'lightgreen'}}>Utvecklare</Box>
                </Link>
            </div>
        </div>
    )
}