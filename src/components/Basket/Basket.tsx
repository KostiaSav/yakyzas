import { Box, IconButton, Menu, MenuItem } from '@mui/material'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useEffect, useState } from 'react';
import { IBasket } from '../../typesript/interfaces';


const Basket = ({ products }: IBasket) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ShoppingBasketIcon className="icons-main" />
            </IconButton>

            <Menu
                id="basket-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                className="basket-menu"
                sx={{
                    top: "20px",
                    left: "-168px",
                }}
            >
                {
                    products?.data
                        ?
                        products.data.map(el => (
                            <MenuItem
                                sx={{
                                    minWidth: "200px",
                                    minHeight: "100px"
                                }}
                            >
                                {el.el.title}
                            </MenuItem>
                        ))
                        :
                        <MenuItem
                            sx={{
                                minWidth: "200px",
                                minHeight: "100px !important",
                                fontSize: "14px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            Basket is empty
                        </MenuItem>
                }
            </Menu>
        </Box>
    )
}

export default Basket