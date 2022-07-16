import React from 'react'
import Item from './Item'
import Box from "@mui/material/Box";
import Products from '../data/Products.json'
import { useState } from 'react'

const ItemList = () => {
  
  const [data, setData] = useState([])

  const myPromise = new Promise((res, rej) => {
    
    setTimeout(() => {
      res(() => {
        return Products.products
      })
      rej('No se pudo cargar')
    }, 2000);
  })
  myPromise
    .then((res) => {
      setData(res);
    })
    .catch((err) => {
      console.log(err);
    })

  
  return (
    <Box sx={{ maxWidth: "1260px", ml: 'auto', mr: 'auto', display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: "center" }}>
    {
      data.map((dato) => (
        <Item
          dato={dato}
          key={dato.id}
        />
      ))
    }
    </Box>
  )
}

export default ItemList