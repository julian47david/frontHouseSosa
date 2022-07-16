import React from 'react'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({dato}) => {

  const { title, description, price, image } = dato;

  return (
    <Card sx={{ width: "200px", mx: "1rem", mb: 3, pb: 2, backgroundColor: "#e0e0e0"}}>
      <CardMedia
        component="img"
        alt={title}
        sx={{ width: '80%', px: 3, pt: 2 }}
        image={image}
      />
      <CardContent color="black">
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
        <Box sx={{ backgroundColor: "#02354124", borderRadius: '5px', py: 1, px: 2  }}>
            <Typography component={"p"} variant={"body2"} sx={{ mb: 0, textAlign: 'center', cursor: 'crosshair', fontWeight: 500 }} color='#333'>
            ${ price }
            </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <Button size="small" 
          sx={{backgroundColor: "#023541", borderRadius: '5px', py: 1, px: 2, color: '#fff',
            ':hover': {
              backgroundColor: '#008b7d',
              color: 'white'
            }
          }}
        >Comprar</Button>
      </CardActions>
    </Card>
  )
}

export default Item
