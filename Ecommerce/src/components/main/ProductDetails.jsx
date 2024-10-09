import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const ProductDetails = () => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex" }}> <img width={300} src="src\t-shirts-products\more\1 (11).jpg"></img> </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}> <Typography variant="h5" >
                WOMEN&apos;S FASHION
            </Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h2">
                    $12.99
                </Typography>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quo
                    inventore maiores, adipisci necessitatibus quidem!
                </Typography>

                <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }} direction={"row"} gap={1} my={2}>
                    {[" ", " "].map((item) => {
                        return (
                            <img style={{ borderRadius: 3 }} height={100} width={90} key={item} src={item}></img>
                        )
                    })}
                </Stack>

                <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }} variant="contained">
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    Buy Now
                </Button>

            </Box>

        </Box>

    );
}
export default ProductDetails;






