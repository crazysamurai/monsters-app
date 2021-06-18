import React from "react";
import "./card-list.css";
import Card from "../card/card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
        //added key to let react know which element is related to which html tag and make it efficient as it will then only render the item that is updated instead of rendering all of them
      ))}
    </div>
  );
};

export default CardList;
