import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ id, title, cover }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/projet/${id}`);
  };

  return (
    <div className="card" onClick={handleNavigation}>
      <img src={cover} alt={title} className="card-cover" />
      <span className="card-title">{title}</span>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
