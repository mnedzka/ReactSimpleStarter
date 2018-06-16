import React, { Component } from "react";
import SearchBar from "./searchBar";

import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyDXLjzRoqouXrq8OYfnjLn_XGNmTZyRRA8";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: "surfboards" }, videos => {
      this.setState({ videos });
    });
  }
  render() {
    return <SearchBar />;
  }
}
