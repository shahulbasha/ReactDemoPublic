import React from "react";
import Card from "./Card";

class CardList extends React.Component {
  render() {
    return (
      <div className="card-container">
        {this.props.robots.map((user, i) => {
          return (
            <Card
              key={this.props.robots[i].id}
              id={this.props.robots[i].id}
              name={this.props.robots[i].name}
              email={this.props.robots[i].email}
              username={this.props.robots[i].username}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
