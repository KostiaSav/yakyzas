import { Box, Container } from '@mui/material'
import AdvantagesList from '../AdvantagesList/AdvantagesList'
import Title from '../../UI/Title/Title'

const Advantages = () => {
  return (
    <Box id="advantage">
        <Container className='container-xl'>
            <Title>Наши преимущества</Title>

            <AdvantagesList />
        </Container>
    </Box>
  )
}

export default Advantages