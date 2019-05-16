import React from "react";
class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>Welcome to my First React App</p>
        <p>{this.props.greeting}</p>
      </div>
    );
  }
}

const Hello1 = props => {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to my First React App</p>
      <p>{props.greeting}</p>
    </div>
  );
};
export default Hello;
