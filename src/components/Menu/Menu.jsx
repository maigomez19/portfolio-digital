import React, {useState} from "react";

// CSS
import "./Menu.css";

// TRADUCTOR
import i18n from './../../i18n';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="#bienvenidosTitulo">{i18n.t('Bienvenidos')}</a>
                <a href="#conocimientosTitulo">{i18n.t('Informática')}</a>
                <a href="#experienciaTitulo">{i18n.t('exp')}</a>
                <a href="#educacionTitulo">{i18n.t('edu')}</a>
                <a href="#proyectosTitulo">{i18n.t('pro')}</a>
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