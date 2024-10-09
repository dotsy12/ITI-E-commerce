import { Box, Button, Container, Dialog, IconButton, Rating, Stack, Typography, useTheme } from "@mui/material"
import { useState } from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
const Main = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [alignment, setAlignment] = useState('left');

    const handleAlignment = (
        event, newAlignment
    ) => {
        setAlignment(newAlignment);
    };

    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ py: 9, mt: 1 }}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} flexWrap={"wrap"} gap={3}>
                <Box>
                    <Typography variant="h6"> Selected Products</Typography>
                    <Typography fontWeight={300} variant="body1">All our arrivais in a exclusive brand selection </Typography>
                </Box>

                <ToggleButtonGroup
                    color="error"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        ".Mui-selected": {
                            border: "1px solid rgpa(233,69,96,0.5) !important",
                            color: "#e94560",
                            backgroundColor: "initial",
                        },
                    }}
                >
                    <ToggleButton sx={{ color: theme.palette.text.primary }}
                        className="myButton" value="left" aria-label="left aligned">
                        All Product
                    </ToggleButton>
                    <ToggleButton sx={{ mx: "16px !important", color: theme.palette.text.primary }} className="myButton" value="center" aria-label="centered">
                        Men category
                    </ToggleButton>
                    <ToggleButton sx={{ color: theme.palette.text.primary }}
                        className="myButton" value="right" aria-label="right aligned">
                        women category
                    </ToggleButton>
                </ToggleButtonGroup>

            </Stack>

            <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>

                {["aaa", "bbb", "ccc"].map((item) => {
                    return (
                        <Card key={item} sx={{ maxWidth: 333, mt: 6, ":hover .MuiCardMedia-root": { rotate: "1deg", scale: "1.1", transition: "0.35s" } }}>
                            <CardMedia
                                sx={{ height: 240 }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                    <Typography gutterBottom variant="h6" component={"div"}>T-Shirt</Typography>

                                    <Typography variant="subtitle1" component="p" >
                                        $15.99
                                    </Typography>
                                </Stack>
                                <Typography variant="body2" color="text.secoundry">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus atque odio voluptatum! Quo, magni.
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }}
                                    // @ts-ignore
                                    size="larg">
                                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                                    Add to card</Button>

                                <Rating precision={0.5} name="read-only" value={3.5} readOnly />
                            </CardActions>
                        </Card>
                    )
                })}
            </Stack>

            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-describedby="alert-dialog-description"
                aria-labelledby="alert-dialog-title"
            >
                <IconButton sx={{ ":hover": { color: "red", rotate: "360deg", transition: "0.3s" }, position: "absolute", top: 0, right: 10 }}
                    onClick={(handleClose)} >
                    <Close />
                </IconButton>

                <ProductDetails />
            </Dialog>


        </Container>
    )
}
export default Main;