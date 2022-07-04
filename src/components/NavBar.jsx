import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom'

const color = red[500];

const drawerWidth = 240;
const navItems = ['Inicio', 'Cursos', 'Blog', 'About', 'Contacto'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 , fontFamily: 'Staatliches'}}>
        FH
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Button 
                key={item} 
                sx={{ textDecoration: 'none', color: 'white' }} 
                component={Link}
                color='primary'
                to={`/${item}`}>
                {item}
                </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <AppBar component="nav" color='secondary' >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            <Typography 
              variant="h6"
              sx={{ my: 0, mx: 1, display: { xs: 'block', sm: 'none' }, fontFamily: 'Staatliches' }}
            >FRONT HOUSE</Typography>
          </IconButton>

          <Typography
            variant='h5' 
            sx={{ display: { xs: 'none', sm: 'block' }, my: 0, fontFamily: 'Staatliches', letterSpacing: 2 }}
          >FRONT HOUSE</Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button 
                  key={item} 
                  sx={{ textDecoration: 'none', color: 'white' }} 
                  component={Link}
                  color='primary'
                  to={`/${item}`}>
                  {item}
              </Button>
            ))}
          </Box>
          {/* <Box >
              <Button 
                color='secondary' 
                sx={{lineHeight: '1.4', backgroundColor: '#eee', py: 1, fontWeight: 600,  
                  ':hover': {
                    bgcolor: '#eee',
                    color: 'secondary'
                  }
                }}>
                Iniciar Sesión
              </Button>
          </Box> */}

        </Toolbar>
      </AppBar>
      
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#333', color: '#e3e3e3' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />



      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
