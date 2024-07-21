import { Box, Typography } from "@mui/material"
import background from "../../assets/background.png"

const Hero = () => {
  return (
    <Box className="hero" sx={{backgroundImage: `url(${background})`, backgroundAttachment: "fixed"}}>
        <Box className="hero-content">
            <Typography variant="h4">Добро пожаловать в суши-бар</Typography>
            <Typography className="title-hover-bottom" data-item="YAKYZA SUSHI" variant="h3" marginY={"58.5px"}>YAKYZA SUSHI</Typography>
            <Typography variant="h6">Лучший суши-бар по версии <span style={{color: "#FF893C", fontStyle: "italic"}}>Slivky.by</span> в 2020 году</Typography>
        </Box>
    </Box>
  )
}

export default Hero