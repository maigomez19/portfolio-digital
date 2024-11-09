import React, {useState} from "react";
import { Grid, Stack } from '@mui/material';

// CSS
import "./Menu.css";

// TRADUCTOR
import i18n from './../../i18n';

// ICONS
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">

            <div className={`nav-items ${isOpen && "open"}`}>
                <p className={`nav-title ${isOpen && "open"}`}>{i18n.t('Menu')}</p>

                <a href="#bienvenidosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('Bienvenidos')}</a>
                <a href="#conocimientosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('Informática')}</a>
                <a href="#experienciaTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('exp')}</a>
                <a href="#educacionTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('edu')}</a>
                <a href="#proyectosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('pro')}</a>

                <Grid className="ubicacion contacto-iconos-menu">
                    <p className="contacto-menu"><b>{i18n.t('Contacto')}</b></p>

                    <Stack direction="row" alignItems="center" marginLeft={1}>
                        <a className="icono-menu" href="mailto:maichu19.mg@gmail.com"><EmailIcon className="icono-portada"/></a>

                        <a className="icono-menu" href="https://www.linkedin.com/in/mailen-gomez19/" target="_blank"><LinkedInIcon className="icono-portada"/></a>

                        <a className="icono-menu" href="https://github.com/maigomez19" target="_blank"><GitHubIcon className="icono-portada"/></a>
                    </Stack>
                </Grid>
            </div>

            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Menu