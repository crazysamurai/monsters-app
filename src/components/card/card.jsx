import React from "react";
import "../card/card.css";
import "../card-list/card-list";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt=""
      />
      <h4>{props.monster.name}</h4>
      <p>{props.monster.email}</p>
    </div>
  );
};
export default Card;
