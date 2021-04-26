import React, { Component } from "react";
import API from "../../util/API.js";
import DisplayCards from "../Card";


class TestAPI extends Component {
    state = {
      search: "",
      userName: "",
      email: "",
      phone: "",
      DOB: "",
      image: ""
    };
  
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
      this.getUsers();
    }
  
    getUsers = query => {
      const res = API.results;
      {console.log(res.map(elements => elements.name));}
         this.setState({ userName: res[0].name.first + " " + res[0].name.last,
            email: res[0].email,
            phone: res[0].phone,
            DOB: res[0].dob.age,
           image: res[0].picture.thumbnail});
      console.log(res[0].email);     
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
          <DisplayCards 
          name={[this.state.userName]}
          email={[this.state.email]}
          phone={[this.state.phone]}
          DOB= {[this.state.DOB]}
         image= {[this.state.image]}
          ></DisplayCards>
          {/* <img src={this.state.results.pictures.thumbnail} alt="thumbnail user"/> */}
        </div>
      );
    }
  }
  
  export default TestAPI;
  