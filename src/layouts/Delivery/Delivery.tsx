import { Box, Container, Grid } from "@mui/material"
import { IDeliveryItem } from "../../typesript/interfaces"
import DeliveryItem from "../../components/DeliveryItem/DeliveryItem"
import delivery_image_1 from "../../assets/delivery_item_1.png";
import delivery_image_2 from "../../assets/express-delivery.png";
import Title from "../../UI/Title/Title";

const deliveryList: IDeliveryItem[] = [
    {
        title: "ВЫГОДНЫЙ САМОВЫВОЗ  - СКИДКА 10 %",
        description: [
            {
                title: "Забери сам в удобное время по адресу",
                description: "ул. Гоголя, 87"
            },
            {
                title: "Время работы",
                description: "10:00 до 23:00 без выходных"
            }
        ],
        list: [
            "Скидки не распространяется на напитки и не суммируются с другими акциями и специальными предложениями.",
            "Минимальная сумма заказа, стоимость доставки рассчитываются исходя из суммы заказа с учётом скидок и бонусов"
        ],
        image: delivery_image_1
    },


    {
        title: "ДОСТАВКА ЗА 60 минут",
        description: [
            {
                title: "Минимальный заказ",
                description: "20 руб."
            },
            {
                title: "Время работы",
                description: "10:00 до 23:00 без выходных"
            }
        ],
        list: [
            "Время доставки может меняться. Точное время доставки уточняйте у оператора.",
            "За пределы города и в отдалённые от точек самовывоза районы  минимальная сумма доставки может изменяться."
        ],
        image: delivery_image_2
    },


]


const Delivery = () => {
  return (
    <Box id="delivery">
        <Title>О доставке</Title>
        <Container>
            <Grid container justifyContent={"space-between"}>
                {
                    deliveryList.map((el, index) => {
                        return <DeliveryItem key={(index * 3221)} options={el} />
                    })
                }
                
            </Grid>
        </Container>
    </Box>
  )
}

export default Delivery