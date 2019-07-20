import React, { Component } from "react";
import Cards from "./Cards";

function Objects(props) {
  if (!props.data.results) {
    return <h1 className="hide">Loading...</h1>;
  }

  return (
    <div>
      {props.data.results.map(person => (
        <Cards key={person.name} data={person} />
      ))}
    </div>
  );
}
export default Objects;
