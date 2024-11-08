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
                <p className={`nav-title ${isOpen && "open"}`}>{i18n.t('Menu')}</p>

                <a href="#bienvenidosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('Bienvenidos')}</a>
                <a href="#conocimientosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('Informática')}</a>
                <a href="#experienciaTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('exp')}</a>
                <a href="#educacionTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('edu')}</a>
                <a href="#proyectosTitulo" onClick={() => setIsOpen(!isOpen)}>{i18n.t('pro')}</a>
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