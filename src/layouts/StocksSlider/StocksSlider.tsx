import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@mui/material";
import Title from "../../UI/Title/Title";
import "./StockSlider.css"

const StocksSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Container className='container-xl slider_stock'>
            <Title>Акции</Title>
            <Slider {...settings}>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
                <div>
                    <img src="/stock.png" alt="stock" />
                </div>
            </Slider>
        </Container>
    )
}

export default StocksSlider