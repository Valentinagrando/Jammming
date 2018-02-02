import React from "react";
import ReactDOM from "react-dom";
import "./SearchBar.css";


class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value});
    this.props.saveSearchTerm(this.state.searchTerm);
  }

  search() {
    this.props.onSearch(this.state.searchTerm);
  }

  render() {
    return (
      <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} id="field" />
      <a onClick={this.search} >SEARCH</a>
      </div>
    )
  }
}

export default SearchBar;
