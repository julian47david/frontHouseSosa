import React from 'react'
import Item from './Item'
import Box from "@mui/material/Box";
import Products from '../data/Products.json'
import api from '../API/api'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';


const ItemList = () => {
  
  const [data, setData] = useState([])

  const consultarApi = async () => {
    const products = await api.get(`/products`);
    setTimeout(() => {
      return setData(products.data);
    }, 2000);

  };

  useEffect(() => {
    consultarApi();

  }, []);


  // const myPromise = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(() => {
  //       return Products.products
  //     })
  //     rej('No se pudo cargar')
  //   }, 2000);
  // })
  // myPromise
  //   .then((res) => {
  //     setData(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

  
  return (
    <Box sx={{ maxWidth: "1260px", ml: 'auto', mr: 'auto', display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center" }}>
    {
      data.map((dato) => (
      
        <Box
          key={dato.id}
          sx={{ textDecoration: 'none' }} 
          component={Link}
          to={`/details/${dato.id}`}
        >
          <Item
            dato={dato}
            key={dato.id}
            />
        </Box>
      ))
    }
    </Box>
  )
}

export default ItemList