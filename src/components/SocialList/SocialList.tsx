import { Box } from "@mui/material"
import InstagramSocial from "../../UI/InstagramSocial/InstagramSocial"
import FacebookSocial from "../../UI/FacebookSocial/FacebookSocial"
import LinkedinSocial from "../../UI/LinkedinSocial/LinkedinSocial"

const SocialList = () => {
  return (
    <Box
        sx={{
            display: "flex",
            gap: "10px",
            marginRight: "15px"
        }}
    >
        <InstagramSocial />
        <FacebookSocial />
        <LinkedinSocial />
    </Box>
  )
}

export default SocialList