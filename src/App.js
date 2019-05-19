import React from "react";
import CardList from "./CardList";
import axios from "axios";
import SearchBox from "./SearchBox";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.setState({ robots: response.data });
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.username.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="card-list-wrapper">
        <h1>
          <span className="logo1">R</span>O<span className="logo4">B</span>O
          <span className="logo2">F</span>
          <span className="logo5">R</span>I<span className="logo3">E</span>
          <span className="logo4">N</span>D<span className="logo4">S</span>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
