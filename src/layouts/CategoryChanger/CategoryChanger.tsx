import { Box } from "@mui/material"
import { ICategoryChanger } from "../../typesript/interfaces"
import Category from "../../components/Category/Category"
import { categoriesAPI } from "../../services/CategoriesService";

const CategoryChanger = (props: ICategoryChanger) => {

    const { data, isLoading, error } = categoriesAPI.useFetchAllSushiQuery('');

    return (
        <Box sx={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between"
        }}>

            {isLoading && <Box>Loading...</Box>}
            {error && <Box>{String(error)}</Box>}
            {
                data
                ?
                <>
                    <Category category={props.category} key={"c_2131231ca_c"} _id={undefined} title={"Всі"} description={""} image_src={"/all.png"} onClick={() => {props.setCategory(undefined)}}/>
                    {data?.map((el) => {
                        return <Category category={props.category} key={el._id} _id={el._id} title={el.title} description={el.description} image_src={el.image_src} onClick={() => {props.setCategory(el._id)}}/>
                    })}
                </>
                :
                ""
            }

        </Box>
    )
}

export default CategoryChanger