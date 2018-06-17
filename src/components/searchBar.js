import React, { Component } from "react";

class searchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
        {this.state.term}
      </div>
    );
  }
}

export default searchBar;
