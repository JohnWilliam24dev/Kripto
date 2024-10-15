import * as React from 'react';
import { Box, Drawer, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import "./Drawer.css"
import SimpleAccordion from '../Accordion/Accordion';

export default function DrawerNav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      role="presentation"
      className='catalog'
    >
      <div>
      <SimpleAccordion
      title={"Senhas"}
      fun={
      <button className='button_catalog'>Adicione uma Senha +</button>
      }/>
      <SimpleAccordion
      title={"Notas"}
      fun={
      <button className='button_catalog'>Adicione uma Nota +</button>
      }/>
      <SimpleAccordion
      title={"Grupos de Senhas"}
      fun={
      <button className='button_catalog'>Adicione um grupo de Senha +</button>
      }/>
      <SimpleAccordion
      title={"Grupos de Notas"}
      fun={
      <button className='button_catalog'>Adicione um grupo de Notas +</button>
      }/>
      </div>
      
    </Box>
  );

  return (
    <div>
      <AppBar className='barra' >
        <Toolbar >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ mr: 20 }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
    </div>
  );
}