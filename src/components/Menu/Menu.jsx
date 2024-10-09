// REACT
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// ICONS
import MenuIcon from '@mui/icons-material/Menu';

//CSS
import './Menu.css';

// TRADUCTOR
import i18n from './../../i18n';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="menu">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" className='btnMenu'>
            <MenuIcon/>
        </Button>
        
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><a href="#bienvenidosTitulo">{i18n.t('Bienvenidos')}</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="#conocimientosTitulo">{i18n.t('Conocimientos')} {i18n.t('informáticos')}</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="#experienciaTitulo">{i18n.t('Experiencia')} {i18n.t('laboral')}</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="#educacionTitulo">{i18n.t('Formación')} {i18n.t('académica')}</a></MenuItem>
            <MenuItem onClick={handleClose}><a href="#proyectosTitulo">{i18n.t('Mis')} {i18n.t('proyectos')}</a></MenuItem>
        </Menu>
    </div>
  );
}