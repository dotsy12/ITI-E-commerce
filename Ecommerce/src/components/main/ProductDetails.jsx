import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductDetails = ({ product }) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex" }}>
                <img width={300} src={product.image} alt={product.name} />
            </Box>

            <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
                <Typography variant="h5">{product.name}</Typography>
                <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h2">
                    ${product.price.toFixed(2)}
                </Typography>
                <Typography variant="body1">
                    {product.description}
                </Typography>

                <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }} direction={"row"} gap={1} my={2}>
                    {product.gallery.map((img, index) => (
                        <img
                            key={index}
                            style={{ borderRadius: 3 }}
                            height={100}
                            width={90}
                            src={img}
                            alt={`gallery-${index}`}
                        />
                    ))}
                </Stack>

                <Button sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }} variant="contained">
                    <AddShoppingCartIcon sx={{ mr: 1 }} fontSize="small" />
                    Buy Now
                </Button>
            </Box>
        </Box>
    );
};

export default ProductDetails;
