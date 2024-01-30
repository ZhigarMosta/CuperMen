import React from "react";
import "./card.scss";
import Image from "next/image";

const Card = ({card}) => {
  const { src, title } = card;

  return (
    <div className="container_card">
      <Image src={src} alt="" />
      <p className="hero">{title}</p>
    </div>
  );
};

export default Card;
