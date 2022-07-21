import React from 'react'
import Box from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = ({ title, image, price, stock }) => {

  return (
    <Card sx={{display: "flex", flexDirection: 'column', justifyContent: 'space-between', alignItems: "center", width: "200px", height: "440px", mx: "1rem", mb: 3, backgroundColor: "#e0e0e0"}}>
      <CardMedia
        component="img"
        alt={title}
        sx={{ width: 'auto', height: '90px', mx: "auto", pt: 2 }}
        image={image}
      />
      <CardContent sx={{ marginTop: 'auto'}} color="black">
        <Typography 
          gutterBottom 
          variant="h5" 
          component="div" 
          sx={{ fontSize: 18, fontWeight: 700, textAlign: 'center', mb:3, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical'}}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ fontSize: 16, textAlign: 'center', my:3 }} 
        >
          {/* {description} */}
        </Typography>
        <Box sx={{ backgroundColor: "#02354124", borderRadius: '5px', py: 1, px: 2  }}>
            <Typography component={"p"} variant={"body2"} sx={{ mb: 0, textAlign: 'center', fontWeight: 500 }} color='#333'>
            ${ price }
            </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: "center"}}>

        <Box sx={{ backgroundColor: "#02354124", borderRadius: '5px', py: 1, px: 2  }}>
            <Typography component={"p"} variant={"body2"} sx={{ mb: 0, textAlign: 'center', fontWeight: 'Normal' }} color='#333'>
            Stock Disponible: 5
            </Typography>
        </Box>

        <Button size="small" 
          sx={{backgroundColor: "#023541", borderRadius: '5px', py: 1, px: 2, my: 1, color: '#fff',
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
