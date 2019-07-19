import React, { Component } from "react";
import Cards from "./Cards";

export default class Objects extends Component {
  render() {
    if (!this.props.data.results) {
      return <h1 className="hide">Loading...</h1>;
    }

    return (
      <div>
        {this.props.data.results.map(person => (
          <Cards key={person.name} data={person} />
        ))}
      </div>
    );
  }
}
