import { Box, Grid } from '@mui/material';
import Product from '../../components/Product/Product';
import { sushiAPI } from '../../services/SushiService';
import { IProductList } from '../../typesript/interfaces';
import { useDispatch } from 'react-redux';
import { updateBasketSuccess } from '../../store/reducers/Account/AccountSlice';

const ProductsList = (props: IProductList) => {

    const {data, isLoading, error} = sushiAPI.useFetchAllSushiQuery(props.category ? props.category : "");
    const dispatch = useDispatch();

    return (
        <Box>
            <Grid container marginTop={"50px"} gap={"30px 15px"}>
                {isLoading && <Box>Loading...</Box>}
                {error && <Box>{String(error)}</Box>}
                {
                    data?.map((el) => {
                        return <Product key={el._id} product={el} onClick={() => {dispatch(updateBasketSuccess({el}))}} />
                    })
                }
            </Grid>
        </Box>
    )
}

export default ProductsList