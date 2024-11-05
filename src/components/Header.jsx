import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
//   récupére le chemin de la page courante
  const [isSticky, setIsSticky] = useState(false); // État local pour gérer si le header doit être sticky ou non

  const handleScroll = () => {
    // Vérifie la position de défilement

    if (window.scrollY > 50 && window.innerWidth > 768) {
      // Change 50 selon l'effet désiré
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Ajoute l'écouteur d'événements pour le défilement
    return () => {
      window.removeEventListener("scroll", handleScroll); // Supprime l'event listener
    };
  }, []); // Le tableau vide [] signifie que l'effet s'exécute une seule fois lors du montage


  // Vérifie si l'utilisateur est sur une page où le header ne doit pas être sticky
  const isStickyDisabled = location.pathname === "/";

  return (
    <nav className={`header ${isSticky && isStickyDisabled ? "sticky" : ""}`}>
      <div className="Logo">
        <h1>Pauline Delacour</h1>
      </div>
      <div className="nav-link">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Mes projets
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          A propos
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active" : ""}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Header;
