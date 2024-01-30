"use client";
import Card from "@/components/card/card";
import React, { useState } from "react";
import "./cards.scss";
import cardList from "@/assets/cardList.js";

const search = (query) => {
  if (!query) {
    return cardList;
  }

  const lowerCaseQuery = query.toLowerCase();

  return cardList.filter((card) =>
    card.title.toLowerCase().includes(lowerCaseQuery)
  );
};

export default function About() {
  const [cards, setCards] = useState(cardList);

  const sreachChange = (event) => {
    const seachCard = search(event.target.value);
    setCards(seachCard);
  };

  return (
    <div className="wrapper_container wrapper_container_card">
      <div className="container">
				<h3 className="textCard">Marvel characters</h3>
        <input type="text" placeholder="find" onChange={sreachChange} />
        <div className="wrapper_card">
          {cards.map((card) => {
            return <Card key={card.id} card={...card} />;
          })}
        </div>
      </div>
    </div>
  );
}
