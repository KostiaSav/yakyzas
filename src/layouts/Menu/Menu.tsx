import { Container, Typography } from "@mui/material"
import ProductsList from "../ProductsList/ProductsList"
import CategoryChanger from "../CategoryChanger/CategoryChanger"
import { useState } from "react"

const Menu = () => {

    const [category, setCategory] = useState<string | undefined>(undefined);

    return (
        <Container>
            <Typography id="menu" textAlign={"center"} variant="h5" marginY={"50px"}>Наше меню</Typography>
            <CategoryChanger category={category} setCategory={setCategory}/>
            <ProductsList category={category}/>
        </Container>
    )
}

export default Menu