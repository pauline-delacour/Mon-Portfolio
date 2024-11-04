import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    //récupére le chemin de la page courante

    return (
        <nav className="header">
            <div className="Logo">
                <h1>Pauline Delacour</h1>
                </div>
            <div className="nav-link">
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                Mes projets
                </Link>
                <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
                A propos
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact
                </Link>
                
            </div>
        </nav>
    );
};

export default Header;