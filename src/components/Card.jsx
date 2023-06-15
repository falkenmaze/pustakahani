import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, description, image, link }) {
  return (
    <div className="Card">
      <img src={image} width={200} height={200} />
      <h5>
        <Link to={link}>{title}</Link>
      </h5>
      <p>{description}</p>
    </div>
  );
}

export default Card;
