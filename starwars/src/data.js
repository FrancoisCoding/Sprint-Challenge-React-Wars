import React, { Component } from "react";
import axios from "axios";
import People from "./components/People";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      this.setState({
        data: response.data
      });
    });
  }
  render() {
    return (
      <>
        <People data={this.state.data} />
      </>
    );
  }
}
