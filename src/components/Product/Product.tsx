
import { useState } from 'react';
import { ISushi } from '../../typesript/interfaces'
import { Box, Button, Grid, Typography } from '@mui/material'
import noImage from '/no_sushi.png'

interface IProduct {
    product: ISushi,
    onClick?: any
}

const Product = ({ product, onClick }: IProduct) => {

    const [down, setDown] = useState<boolean>();
    const [imgSrc, setImgSrc] = useState<string>(product.image_src ? product.image_src : noImage);

    const onClickButton = () => {
        onClick();
        console.log("Button click");
    }

    const handleError = () => {
        setImgSrc(noImage);
    };

    return (
        <Grid item xs={3.8} className='product'>
            <Box className="product-image-box">
                <img
                    onMouseEnter={() => setDown(true)}
                    onMouseLeave={() => setDown(false)}
                    src={imgSrc}
                    alt="product"
                    height={"230px"}
                    onError={handleError}
                />
            </Box>
            <Box className="product-main" padding={"14px"}>
                <Typography variant="h5">{product.title}</Typography>
                <Typography marginTop={"10px"} className={'product-description ' + (down ? "product-description-mini" : "")}>{product.description}</Typography>
                <Box marginTop={"20px"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Box>
                        <Typography>{product.weight} гр., {product.quantity} шт</Typography>
                        <Typography variant='h5' marginTop={"10px"} fontWeight={700} letterSpacing={1.1}>{product.price} грн.</Typography>
                    </Box>

                    <Button variant="outlined" color="secondary" onClick={onClickButton}>В кошик</Button>
                </Box>
            </Box>
        </Grid>
    )
}

export default Product