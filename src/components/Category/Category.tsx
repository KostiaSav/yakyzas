import { Box, Typography } from '@mui/material'
import { ICategoryEl } from '../../typesript/interfaces'

const Category = (props: ICategoryEl) => {
    return (
        <Box sx={{
            width: "fit-content",
            backgroundColor: props.category == props._id ? "rgb(255, 137, 60)" : "#303030",
            padding: "10px 25px",
            boxShadow: "0px 8px 35px 0px rgba(5, 5, 5, 0.5)",
            borderRadius: "10px",
            transition: ".3s",
            cursor: "pointer",
            textAlign: "center",
            "&:hover": {
                "background": "rgb(255, 137, 60)"
            }
        }}

        onClick={props.onClick}
        >
            <img src={props.image_src} width={"50px"} height={"50px"} />
            <Typography variant="body1">{props.title}</Typography>
        </Box>
    )
}

export default Category