import { Box, Grid, Typography } from "@mui/material"
import { IAdvantages } from "../../typesript/interfaces"

interface IAdvantage {
    options: IAdvantages
}

const Advantage = ({options}: IAdvantage) => {
  return (
    <Grid item
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}
    >
        <Box
            sx={{
                backgroundColor: options.color,
                borderRadius: "15px"
            }}
        >
            <img src={options.image_src} alt="advantages" style={{padding: "20px"}} />
        </Box>

        <Typography marginTop={"25px"} marginBottom={"5px"}>{options.title}</Typography>
        <Typography maxWidth={"180px"} textAlign={"center"} color={"#979696"}>{options.description}</Typography>
    </Grid>
  )
}

export default Advantage