import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <img
          src={`https://robohash.org/${this.props.id}?100x100`}
          alt="A reusable card"
        />
        <h2>{this.props.username}</h2>
        <p>{this.props.email}</p>
      </div>
    );
  }
}

export default Card;
