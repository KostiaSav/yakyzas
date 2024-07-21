import { IconButton } from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from "react-router-dom";

const LinkedinSocial = () => {
    return (
        <Link to={"https://www.linkedin.com/in/prodan-kostiantyn/"} target="_blank">
            <IconButton>
                <LinkedInIcon className="icons-main" />
            </IconButton>
        </Link>
    )
}

export default LinkedinSocial