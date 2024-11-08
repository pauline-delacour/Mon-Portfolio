import React from "react";
import { useLocation } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";

const Footer = () => {
  //Initialisation de useLocation qui contient les information de l'URL actuelle
  const location = useLocation();
  //Vérification sur l'utilisateur est sur la page Projet ou About , applique le style en fonction de la page
  const isProjetPage = location.pathname.startsWith("/projet") || location.pathname === "/about";
  return (
    //Ajout de la class footer-projet si l'utilisateur est sur la page projet ou about 
    <div className={`footer ${isProjetPage ? "footer-projet" : ""}`}>
      <RiContactsFill className="icone-contact" />
      <span className="contact">Contact</span>
      <a href="mailto:pauline.delacour33@gmail.com" className="contact-link">
        <span className="mail">pauline.delacour33@gmail.com</span>
      </a>
    </div>
  );
};

export default Footer;
