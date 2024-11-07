import React, {useState} from "react";

// CSS
import "./Menu.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="navbar">
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="#">Bienvenidos</a>
                <a href="#">Bienvenidos</a>
                <a href="#">Bienvenidos</a>
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