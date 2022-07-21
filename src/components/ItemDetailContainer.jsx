import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Box from "@mui/material/Box";
import ItemDetail from './ItemDetail';
import Products from '../data/Products.json';
import api from '../API/api'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const consultarApi = async () => {
    const product = await api.get(`/products/${id}`);
    setProduct(product.data);
  };

  useEffect(() => {
    consultarApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
    <Box
    sx={{display: "flex", justifyContent: 'center', alignItems: "center", width: "80%", height: "auto", mx: "auto", mb: 3}}
    >
      {
        product &&
        <ItemDetail
          data={product}
        />
      }
    </Box>

  )
}

export default ItemDetailContainer