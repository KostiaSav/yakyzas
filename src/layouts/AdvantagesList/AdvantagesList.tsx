import { Grid } from "@mui/material"
import { IAdvantages } from "../../typesript/interfaces"
import delivery from "../../assets/express-delivery.png"
import book from "../../assets/book 1.png"
import cooking from "../../assets/cooking 1.png"
import wallet from "../../assets/wallet 1.png"

import Advantage from "../../components/Advantage/Advantage"

const advantages: IAdvantages[] = [
    {
        id: "32131",
        title: "Быстрая доставка",
        description: "Доставим не дольше 60 минут",
        image_src: delivery,
        color: "#362020"
    },
    {
        id: "32132",
        title: "Быстрая доставка",
        description: "Доставим не дольше 60 минут",
        image_src: book,
        color: "#201E37"
    },
    {
        id: "32133",
        title: "Быстрая доставка",
        description: "Доставим не дольше 60 минут",
        image_src: cooking,
        color: "#372D1E"
    },
    {
        id: "32134",
        title: "Быстрая доставка",
        description: "Доставим не дольше 60 минут",
        image_src: wallet,
        color: "#29371E"
    },
]

const AdvantagesList = () => {
  return (
    <Grid container justifyContent={"space-between"}>
        {
            advantages.map((el) => {
                return <Advantage key={el.id} options={el} />
            })
        }
    </Grid>
  )
}

export default AdvantagesList