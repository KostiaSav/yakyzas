import { Typography } from "@mui/material"
import { ITitle } from "../../typesript/interfaces"

const Title = ({children}: ITitle) => {
    return (
        <Typography variant='h4' marginTop="90px" marginBottom="55px" textAlign={"center"}>
            {children}
        </Typography>
    )
}

export default Title