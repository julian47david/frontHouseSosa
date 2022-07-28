import React from 'react'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

  const [count, setCount] = useState(0);
  const [stock, setStock] = useState(5)
  const [nostock, setNoStock] = useState(false)
  const [controller, setController] = useState(false)

  const addNumber = () => {
      if (stock === 1) {
          setNoStock(true)
      }
      if (count < 5 ){
          setCount(count + 1)
          setStock(stock - 1)
      }
  };
  const subNumber = () => {
      if (count > 0) {
          setCount(count - 1)
          setStock(stock + 1)
      }
      if (stock === 0) {
          setNoStock(false)
      }
  };
  const control = () => {
    return setController(true);
  }

  const { title, description, price, image } = data;

  return (
    <Card sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: "center", width: "80%", height: "auto", mx: "1rem", mb: 3, backgroundColor: "#e0e0e0"}}>
    <CardMedia
      component="img"
      alt={title}
      sx={{ width: 'auto', height: '150px', mx: "auto", mt: 2, boxShadow: '0px 0px 2px 3px rgb(255 255 255)' }}
      image={image}
    />
    <CardContent sx={{ marginTop: 'auto'}} color="black">
      <Typography 
        gutterBottom 
        variant="h5" 
        component="div" 
        sx={{ fontSize: 18, fontWeight: 700, textAlign: 'center', mb:3 }}
      >
        {title}
      </Typography>
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ fontSize: 16, textAlign: 'center', my:3 }} 
      >
        {description}
      </Typography>
      <Box sx={{ width: 'fit-content', backgroundColor: "#02354124", borderRadius: '5px', py: 1, px: 2, m: 'auto'  }}>
          <Typography component={"p"} variant={"body2"} sx={{  mb: 0, textAlign: 'center', cursor: 'crosshair', fontWeight: 500 }} color='#333'>
          ${ price }
          </Typography>
      </Box>
    </CardContent>
    <CardActions sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>

      {
        !controller 
        ? <>
            <ItemCount
              addNumber={addNumber}
              subNumber={subNumber}
              count={count}
              stock={stock}
              nostock={nostock}
              />
            <Button size="small" 
              sx={{backgroundColor: "#023541", borderRadius: '5px', py: 1, px: 2, mt: 2, mb: 1, color: '#fff',
                ':hover': {
                  backgroundColor: '#008b7d',
                  color: 'white'
                }
              }}
              onClick={control}
            >
              Añadir al Carrito
            </Button>
          </>
        : <Button size="small" 
            sx={{backgroundColor: "#023541", borderRadius: '5px', py: 1, px: 2, mt: 2, mb: 1, color: '#fff', textDecoration: 'none',
              ':hover': {
                backgroundColor: '#008b7d',
                color: 'white'
              }
            }}
            component={Link}
            to={'/Cart'}
          >
            Ir al Carrito
          </Button>
      }
      
    </CardActions>
    </Card>

  )
}

export default ItemDetail