// @ts-nocheck
import { useState } from 'react';
import {

  Toolbar,
  Typography,
  CssBaseline,

  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Paper,
} from '@mui/material';
import { Inbox, Edit, Delete } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Header1 from 'components/hearder/Header1';
import Header3 from 'components/hearder/Header3';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { images } from '../../images';


const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const products = useSelector((state) => state.products.products);
  const [sortDirection, setSortDirection] = useState("asc");

 

  // Filter products based on the selected category and search query
  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "All" || product.category === selectedCategory) &&
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const handleSortToggle = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
      <>
          {/* <Box sx={{ mt:7 }}/> */}
      <Header1 />
      <Header3 />
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

      

        {/* Main Content */}
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 1 }}>
          <Toolbar />
          <Typography variant="h4" gutterBottom>
            Product Management
          </Typography>

          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
            <TextField
              label="Search by name"
              variant="outlined"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{ mr: 2 }}
            />
            <Button variant="contained" color="error" component={Link} to="/add">
              Add Product
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>
                    Price
                    <IconButton onClick={handleSortToggle}>
                      <ArrowUpwardIcon/>
                    </IconButton>
                  </TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Main Image</TableCell>
                  <TableCell>Gallery</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                    <img src={typeof (product.Image) === 'string' ? product.image : images[product.image]}
                        alt={product.name} style={{ width: '100px', height: 'auto' }} />                    </TableCell>
                    <TableCell>
                      {product.gallery.join(", ")}
                    </TableCell>
                    <TableCell>{product.rating}</TableCell>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton color="error">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
