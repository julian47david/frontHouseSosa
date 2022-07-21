import React from 'react'
import Item from './Item'
import Box from "@mui/material/Box";
import { Link } from 'react-router-dom'

const ItemList = ({ data }) => {
  
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
            key={dato.id}
            title={dato.title}
            image={dato.image}
            price={dato.price}
            stock={dato.stock}
          />
        </Box>
      ))
    }
    </Box>
  )
}

export default ItemList