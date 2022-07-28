import React, { useState } from 'react';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { Typography, Icon } from '@mui/material';
import RemoveTwoToneIcon from '@mui/icons-material/RemoveTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

const ItemCount = ({addNumber, subNumber, count, stock, nostock}) => {

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", zIndex: 100}}>
            <Typography component={"span"} variant={"body2"}>
                {nostock ? <p sx={{ lineHeight: 2}}>Sin Stock</p> : <p sx={{ lineHeight: 2}}>Stock disponible: {stock}</p>}
            </Typography>

            <Box sx={{height: '40px', display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center", backgroundColor: "#D0D0D0", borderRadius: 1}}>
                <Button
                onClick={addNumber}
                sx={{ p: 0 }}
                >
                    <Icon sx={{ width: '25px', height: '25px', p: 0,  borderRadius: '5px' }}>
                        <AddCircleOutlineTwoToneIcon
                            color='secondary'
                            width={25}
                            height={25}
                        />
                    </Icon>
                </Button>
                <Typography component={"span"} variant={"body2"} sx={{ lineHeight: 2}}>
                    <p sx={{ lineHeight: 2}}>{count}</p>
                </Typography>
                <Button
                onClick={subNumber}
                sx={{ p: 0 }}
                >
                    <Icon sx={{ width: '25px', height: '25px', p: 0,  borderRadius: '5px' }}>
                        <RemoveTwoToneIcon
                            color='secondary'
                            width={25}
                            height={25}
                        />
                    </Icon>
                </Button>
            </Box>
        </Box>

    );
}
 
export default ItemCount;
