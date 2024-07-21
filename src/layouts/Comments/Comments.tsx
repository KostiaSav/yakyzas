import { Box, Container, Grid } from "@mui/material"
import { useAppDispatch } from "../../hooks/redux"
import { useEffect } from "react";
import { fetchComments } from "../../store/reducers/ActionCreators";
import Comment from "../../components/Comment/Comment";
import Title from "../../UI/Title/Title";
import { commentsAPI } from "../../services/CommentsService";

const Comments = () => {

    const dispatch = useAppDispatch();
    const {data, isLoading,} = commentsAPI.useFetchAllCommentsQuery("");

    useEffect(() => {
        dispatch(fetchComments());
    }, [dispatch])

  return (
    <Box id="comments">
        <Title>Посетители рекомендуют</Title>
        <Container>
            <Grid container spacing={2}>
                {

                    isLoading
                    ?
                    <Box>Loading...</Box>
                    :
                    data?.map((el) => {
                        return <Comment key={el._id} options={el} />
                    })
                }
            </Grid>
        </Container>
    </Box>
  )
}

export default Comments