import React, { useState } from 'react';
import { Container, Typography, Button, TextField, Stack, Paper, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Carte = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Sigma 18-35mm', price: 1249, quantity: 6, image: 'https://example.com/sigma.jpg' },
    { id: 2, name: 'TDOO Digital Camera', price: 1749, quantity: 3, image: 'https://example.com/tdoo.jpg' },
    { id: 3, name: 'Canon EOS 4000D DSLR', price: 499, quantity: 1, image: 'https://example.com/canon4000d.jpg' },
    { id: 4, name: 'Canon EF 100-400', price: 899, quantity: 2, image: 'https://example.com/canonef100-400.jpg' },
    { id: 5, name: 'Nikon AF-S NIKKOR', price: 549, quantity: 1, image: 'https://example.com/nikon.jpg' },
  ]);

  const [coupon, setCoupon] = useState('');

  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleIncrease = (id) => {
    handleQuantityChange(id, cartItems.find(item => item.id === id).quantity + 1);
  };

  const handleDecrease = (id) => {
    const currentItem = cartItems.find(item => item.id === id);
    if (currentItem.quantity > 1) {
      handleQuantityChange(id, currentItem.quantity - 1);
    }
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ display: 'flex', alignItems: 'center', mb: 3 ,color: "#d23f57" }}>
              <ShoppingCartIcon sx={{ mr: 1, color: "#d23f57"}} /> Your Cart
      </Typography>

      <Grid container spacing={3}>
        {/* Table section */}
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#d23f57" }}>Image</TableCell>
                  <TableCell sx={{ color: "#d23f57" }}>Product</TableCell>
                  <TableCell sx={{ color: "#d23f57" }}>Price</TableCell>
                  <TableCell sx={{ color: "#d23f57" }}>Quantity</TableCell>
                  <TableCell sx={{ color: "#d23f57" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center">
                        <TextField
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                          variant="outlined"
                          size="small"
                          sx={{
                            width: 60,
                            '& input[type=number]': {
                              '-moz-appearance': 'textfield',
                            },
                            '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                              '-webkit-appearance': 'none',
                              margin: 0,
                            },
                          }}
                        />
                        <Stack>
                          <Button
                            onClick={() => handleIncrease(item.id)}
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ minWidth: '30px', marginLeft: '4px' }}
                          >
                            <ArrowDropUpIcon fontSize="small" />
                          </Button>
                          <Button
                            onClick={() => handleDecrease(item.id)}
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ minWidth: '30px', marginLeft: '4px' }}
                          >
                            <ArrowDropDownIcon fontSize="small" />
                          </Button>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell>${item.price * item.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => setCartItems([])} sx={{ mt: 2 }}>
            Empty Cart
          </Button>
        </Grid>

        {/* Your Order section */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ color: "#d23f57" }}>Your Order</Typography>
            <Divider sx={{ my: 2 }} />
            {cartItems.map(item => (
              <Typography key={item.id}>
                {item.name} x {item.quantity} = ${item.price * item.quantity}
              </Typography>
            ))}
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6">Total: ${getTotal()}</Typography>
            <Box mt={2}>
              <TextField
                label="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                fullWidth
                variant="outlined"
              />
              <Button variant="contained"  color="error" sx={{ mt: 2 }} fullWidth>
                Apply Coupon
              </Button>
            </Box>
            <Stack direction="row" spacing={2} mt={3}>
              <Button variant="contained" color="error" fullWidth>
                Checkout Now (${getTotal()})
              </Button>
              <Button variant="outlined" color="error" fullWidth>
                Back Home
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Carte;
