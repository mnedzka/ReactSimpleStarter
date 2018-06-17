import React, { Component } from "react";
import SearchBar from "./searchBar";
import VideoList from "./videoList";
import VideoDetail from "./videoDetail";

import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyDXLjzRoqouXrq8OYfnjLn_XGNmTZyRRA8";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
