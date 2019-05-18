import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input
          type="search"
          placeholder="Search Robots"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
