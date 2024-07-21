import { AppBar, Box } from "@mui/material"
import NavigationLayout from "../NavigationLayout/NavigationLayout";


const Header = () => {
    return (
        <Box>
            <AppBar position="absolute" style={{ background: "transparent", boxShadow: "none" }}>
                <NavigationLayout basket={true}/>
            </AppBar>
        </Box>
    )
}

export default Header