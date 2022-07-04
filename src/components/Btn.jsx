import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Btn = ({textBtn}) => {
    return ( 
    
        <Button 
            sx={{
                color: 'primary.main',
                backgroundColor: '#023541',
            }}
            variant="text"

        >{textBtn}</Button>

    );
}
 
export default Btn;