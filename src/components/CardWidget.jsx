import React from 'react' 
import { Icon } from '@mui/material'
import Button from "@mui/material/Button";
import shop from '../images/carrito.svg'
import { Link } from 'react-router-dom';

const CardWidget = () => {
    return (  

        <Button
            sx={{ textDecoration: 'none', color: 'white' }} 
            component={Link}
            color='primary'
            to={'/Cart'}
        >
            <Icon sx={{ width: '45px', height: '40px', backgroundColor: '#e3e3e3', borderRadius: '5px' }}>
                <img
                    width={45}
                    height={40}
                    src={shop} alt="" 
                />
            </Icon>
        </Button>

    );
}
 
export default CardWidget;
