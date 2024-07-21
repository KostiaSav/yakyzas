import { Avatar, Box, Grid, Typography } from "@mui/material"
import { IComment } from "../../typesript/interfaces"
import com from "../../assets/com.png"
import { userAPI } from "../../services/UserService"

interface ICommentComponent {
    options: IComment
}
const Comment = ({options}: ICommentComponent) => {

    const {data, isLoading} = userAPI.useFetchAllUsersQuery(options.userId);

  return (
    <Grid 
        item xs={4} 
        className="comment"
    >
        <Box className="comment-top" sx={{
            height: "70%"
        }}>
            <img src={com} alt="com" />
            <Typography marginTop={"25px"}>{options.description}</Typography>
        </Box>

        {
            (!isLoading && data != undefined)
            ?
            <Box className="comment-main">
                <Avatar src={data[0].image_src} alt="avatar" sx={{width: 50, height: 50}}/>
                <Box>
                <Typography>{data[0].name} {data[0].surname}</Typography>
                <Typography className="tags">{data[0].tag}</Typography>
                </Box>
            </Box>
            :
            ""
        }
    </Grid>
  )
}

export default Comment