import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ItemList from './ItemList'

const ItemListContainer = () => {
  return (
    
    <ItemList
    
    />
    
    );
  };
  
  // <Card sx={{ width: "200px", mx: 2, backgroundColor: "#eee", ml: 'auto', mr: 'auto'}}>
  //   <CardContent>
  //       <Typography component={"p"} variant={"body2"} sx={{ fontSize: 16, textAlign: 'center', my:3 }} color="black" gutterBottom>
  //       Mensaje enviado por Props:
  //       </Typography>
  //       <Box sx={{ backgroundColor: "#023541", borderRadius: '5px', py: 2 }}>
  //           <Typography component={"p"} variant={"body2"} sx={{ mb: 0, textAlign: 'center', cursor: 'crosshair' }} color='white'>
  //           { price }
  //           </Typography>
  //       </Box>
  //   </CardContent>
  //   <CardActions sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", pb: 4}}>
      
  //   </CardActions>
  // </Card>

export default ItemListContainer;
