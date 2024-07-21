import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { IDeliveryItemComponent } from "../../typesript/interfaces"


const DeliveryItem = ({ options }: IDeliveryItemComponent) => {
    return (
        <Grid item xs={5.95} className="delivery">
            <Typography className="delivery-title" marginBottom={"20px"}>{options.title}</Typography>
            {
                options.description?.map((el, index) => {
                    return (
                        <Typography key={(index * 3221212)} lineHeight={1} className="delivery-description">
                            <Typography variant="overline" fontWeight={600}>
                                {el.title}:{" "}
                            </Typography>
                            {el.description}
                        </Typography>
                    )
                })
            }

            <List className="delivery_list">
                {
                    options.list?.map((el, index) => {
                        return (
                            <ListItem key={(index * 32212112)}>
                                <ListItemText>
                                    {el}
                                </ListItemText>
                            </ListItem>
                        )
                    })
                }
            </List>

            {
                options.image
                &&
                <img src={options.image} className="delivery-image" alt="delivery" width={206} height={206}/>
            }
        </Grid>
    )
}

export default DeliveryItem