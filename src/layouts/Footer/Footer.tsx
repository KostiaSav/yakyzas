import { Box, Container, Typography } from "@mui/material"
import NavigationLayout from "../NavigationLayout/NavigationLayout"

const Footer = () => {
  return (
    <Box marginTop={"40px"}>
      <NavigationLayout />
      <Container className="container" sx={{
        textAlign: "center",
        margin: "30px auto 22px"
      }}>
        <Typography variant="body2">
          © ИП Лисюк Ирина Валентиновна, УНП 291610348 г.Брест, пр-кт Машерова 57/1-18
        </Typography>

        <Typography variant="body2">
          Свидетельство 291610348 выдано 19.04.2019 Администрацией Московского р-на г.Бреста
        </Typography>

        <Typography variant="body2">
          Интернет-магазин www.yakuzasushi.by зарегистрирован в Торговом реестре Республики Беларусь №448735 от 04.05.2019.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer