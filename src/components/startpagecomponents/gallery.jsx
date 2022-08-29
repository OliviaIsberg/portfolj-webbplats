import "../../css/gallery.css";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export default function Gallery() {
  return (
    <div className="galleryContainer">
      <h3>Våra kompetenser på Agili</h3>

      <div className="rollsBoxes">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#4E4E4E",
          }}
        >
          <Link to="skills">Designer</Link>
        </Box>

        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#4E4E4E",
          }}
        >
          <Link to="skills">Scrummästare</Link>
        </Box>

        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "#4E4E4E",
          }}
        >
          <Link to="skills">Utvecklare</Link>
        </Box>
      </div>
    </div>
  );
}
