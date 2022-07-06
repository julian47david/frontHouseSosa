import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ItemListContainer = ({ greeting }) => {
  return (
    <Card sx={{ width: "200px", mx: 2, backgroundColor: "#eee", ml: 'auto', mr: 'auto'}}>
        <CardContent>
            <Typography sx={{ fontSize: 16, textAlign: 'center', my:3 }} color="black" gutterBottom>
            Mensaje enviado por Props:
            </Typography>
            <Box sx={{ backgroundColor: "#023541", borderRadius: '5px', py: 2 }}>
                <Typography sx={{ mb: 0, textAlign: 'center', cursor: 'crosshair' }} color='white'>
                { greeting }
                </Typography>
            </Box>
        </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
};

export default ItemListContainer;
