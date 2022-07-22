import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Cart = () => {
  return (
    <Box
      sx={{
        ml: "auto",
        mr: "auto",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="body2"
        color="#333"
        sx={{ fontSize: 20, fontWeight: 'bold', textAlign: "center", my: 3, backgroundColor: '#e3e3e3', borderRadius: '5px', p:1 }}
      >
        Carrito de Compras
      </Typography>
    </Box>
  );
};

export default Cart;
