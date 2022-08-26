import '../../css/gallery.css';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";

export default function Gallery() {
    return (
        <div className="galleryContainer">
            <h3>Roller</h3>

            <div className="rollsBoxes">
            <Box component="Button" sx={{width: 300, height: 300, marginLeft: 4, backgroundColor: 'lightblue'}}>Scrum master</Box>
            <Box component="Button" sx={{width: 300, height: 300, marginLeft: 4, backgroundColor: 'pink'}}>Designer</Box>
            <Box component="Button" sx={{width: 300, height: 300, marginLeft: 4, backgroundColor: 'lightgreen'}}>Utvecklare</Box>
            </div>
        </div>
    )
}