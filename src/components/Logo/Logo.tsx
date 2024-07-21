import { Link } from "react-router-dom"
import logo from '../../assets/logo.png'


const Logo = () => {
    return (
        <Link to={"/"}>
            <img src={logo} alt="logo" />
        </Link>
    )
}

export default Logo