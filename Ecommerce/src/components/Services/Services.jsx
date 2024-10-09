import { Box, Container, Grid, Typography, Button, useTheme } from '@mui/material';

const Services = () => {
    const theme = useTheme(); // Get the current theme

    return (
        <div>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url("../../public/services-banner.jpg")', // Replace with a relevant image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 400,
                    position: 'relative',
                    textAlign: 'center',
                    color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Conditional text color
                }}
            >
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Our Services
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    Offering exceptional service to make your shopping experience smooth
                </Typography>
                <Button variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
                    Learn More
                </Button>
            </Box>

            {/* Services Section */}
            <Container maxWidth="lg" sx={{ py: 6 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
                    What We Offer
                </Typography>

                <Grid container spacing={4}>
                    {/* Shipping & Delivery Service */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                            }}
                        >
                            <img
                                src="../../public/delivery.png" // Add your image path
                                alt="Shipping & Delivery"
                                style={{ width: '220px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                Fast Shipping & Delivery
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                We ensure quick and reliable delivery to your doorstep with options for same-day or expedited shipping.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Customer Support */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                            }}
                        >
                            <img
                                src="../../public/service.png" // Add your image path
                                alt="Customer Support"
                                style={{ width: '305px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                24/7 Customer Support
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                Have a question or concern? Our team is here around the clock to assist you with all your needs.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Warranty & Returns */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                borderRadius: '8px',
                                padding: 3,
                                boxShadow: 3,
                                textAlign: 'center',
                                backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                            }}
                        >
                            <img
                                src="../../public/easy.WEBP" // Add your image path
                                alt="Warranty & Returns"
                                style={{ width: '155px', marginBottom: '20px' }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                Warranty & Easy Returns
                            </Typography>
                            <Typography variant="body2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                We offer hassle-free returns and warranty coverage to ensure your satisfaction with our products.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Testimonials Section */}
            <Box sx={{ py: 6, backgroundColor: theme.palette.mode === 'dark' ? '#303030' : '#f5f5f5' }}>
                <Container maxWidth="md">
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                        What Our Customers Are Saying
                    </Typography>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "Amazing service and super fast delivery! I received my order in less than 24 hours."
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – Sarah M.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "Customer support is excellent! They helped me with all my questions."
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – John D.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Additional Testimonials */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "I loved the warranty service. Got my product replaced easily without hassle!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – Emily K.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "The return process was very smooth, and I was refunded quickly!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – Mark T.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "Best customer support I have ever experienced. Truly 24/7!"
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – Lisa P.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: '8px',
                                    padding: 3,
                                    boxShadow: 1,
                                    backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', // Conditional background color
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    "Fantastic experience! Easy returns and reliable warranty service."
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                                    – James R.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Call to Action Section */}
            <Box sx={{ py: 6, textAlign: 'center', backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff' }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                    Ready to Experience Our Exceptional Service?
                </Typography>
                <Button href='/' variant="contained" color="primary" sx={{ fontWeight: 'bold' }}>
                    Shop Now
                </Button>
            </Box>
        </div>
    );
};

export default Services;
