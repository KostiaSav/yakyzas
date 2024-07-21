import {  Container, Toolbar } from "@mui/material"
import Logo from "../../components/Logo/Logo"
import Navigation from "../../components/Navigation/Navigation"
import Phones from "../../components/Phones/Phones"
import { INavigationLayout } from "../../typesript/interfaces";
import Basket from "../../components/Basket/Basket";
import SocialList from "../../components/SocialList/SocialList";
import { useSelector } from "react-redux";


const NavigationLayout = ({basket}: INavigationLayout) => {

    const accountState = useSelector((state) => state.accountReducer);

    return (
        <Container className="container">
            <Toolbar>
                <Logo />
                <Navigation />
                <SocialList />
                <Phones />

                {
                    basket
                    &&
                    <Basket products={accountState}/>
                }

            </Toolbar>
        </Container>
    )
}

export default NavigationLayout