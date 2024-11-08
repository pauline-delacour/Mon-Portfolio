import React from "react";
import { useLocation } from "react-router-dom";
import { RiContactsFill } from "react-icons/ri";

const Footer = () => {
  const location = useLocation();

  const isProjetPage = location.pathname.startsWith("/projet") || location.pathname === "/about";
  return (
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
