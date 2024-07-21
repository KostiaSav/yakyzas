import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import gif from '../../assets/kolobok-icq.gif';

const Error = () => {
    const navigate = useNavigate();

  return (
    <Box
        className="center"
    >
        <img src={gif} alt="gif" />
        <Typography variant='h2' marginX={"20px"}>
            Error 404 
        </Typography>
        <Typography variant='h3' marginY={"20px"}>
            Сторінку не знайдено
        </Typography>

        <Button size="large" variant="outlined" color="secondary" onClick={() => navigate(-1)}>Повернутися на сайт</Button>
    </Box>
  )
}

export default Error