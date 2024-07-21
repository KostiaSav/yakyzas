import { Box, Typography } from "@mui/material"
import { Link, animateScroll as scroll } from "react-scroll";
import { INavigationPages } from "../../typesript/interfaces"


const navigationPages: INavigationPages[] = [
    { id: "2212", title: "Меню", link: "menu" },
    { id: "2213", title: "Преимущества", link: "advantage" },
    { id: "2214", title: "О Доставке", link: "delivery" },
    { id: "2215", title: "Отзывы", link: "comments" },
]

const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1, gap: "30px", marginX: "20px", justifyContent: "center", display: { xs: 'none', md: 'flex' } }}>
            {navigationPages.map((el) => {
                return (
                    <Link
                        key={el.id}
                        to={el.link}
                        spy={true}
                        smooth={true}
                        duration={800}
                    >
                        <Typography style={{ fontSize: "15px", cursor: "pointer" }}>
                            {el.title}
                        </Typography>
                    </Link>
                )
            })}
        </Box>
    )
}

export default Navigation