
import { Box, Button, Typography, CardMedia } from "@mui/material"
import "../../../css/Skills/Designers.css"
import profilePicture from "../../../Assets/profile-picture.png"
 


export default function Designers() {


    return (
        <Box className="skill-content">
        <Box className="description">
            <Typography variant="h5" className="title">Designers</Typography>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id pulvinar lacus, quis varius ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue lorem, viverra vel luctus sed, tincidunt vel mauris. Quisque et velit a dolor bibendum sodales at eu
            </Typography>
        </Box>
        <Box className="tool-box">
            <Typography variant="h6">Our Tools</Typography>
            <div className="tools">
                <div className="tool">
                <Typography variant="subtitle1">Rubrik</Typography>
                <Typography variant="body1">text text text text text text text text text text</Typography>
                </div>
                <div className="tool">
                <Typography variant="subtitle1">Rubrik</Typography>
                <Typography variant="body1">text text text text text text text text text text</Typography>
                </div>
                <div className="tool">
                <Typography variant="subtitle1">Rubrik</Typography>
                <Typography variant="body1">text text text text text text text text text text</Typography>
                </div>
                <div className="tool">
                <Typography variant="subtitle1">Rubrik</Typography>
                <Typography variant="body1">text text text text text text text text text text</Typography>
                </div>
            </div>
        </Box>
        <Box className="expert-box">
            <Typography variant="h6">Our Experts</Typography>
            <div className="expert-description">
                <div className="expert-pic-div">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                <CardMedia className="expert-pic" component="img" src={profilePicture} sx={{width: "10rem"}}/>
                </div>
                <div className="expert-desc">
                    <Typography  variant="subtitle1">FIRSTNAME LASTNAME</Typography>
                    <Typography className="NameOnExpert" variant="body1">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
                    <Button sx={{bgcolor: "#E3FFE6", color: "black", marginTop: ".5rem"}}>Contact X </Button>
                </div>
            </div>
        </Box>
        </Box>
       
    )
}