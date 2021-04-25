import React, { Component } from "react";
import API from "../../util/API.js";

class TestAPI extends Component {
    state = {
      search: "",
      results: ""
    };
  
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
      this.getUsers();
    }
  
    getUsers = query => {
      API.getRandomUsers(query)
        .then(res => this.setState({ results: res.data.results[0].name.first }))
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      this.getUsers(this.state.search);
    };
  
    render() {
      return (
        <div>
          {/* <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ResultList results={this.state.results} /> */}
          <h3>{[this.state.results]}</h3>
          {/* <img src={this.state.results.pictures.thumbnail} alt="thumbnail user"/> */}
        </div>
      );
    }
  }
  
  export default TestAPI;
  