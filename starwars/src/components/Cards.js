import React, { Component } from "react";

function Cards(props) {
  return (
    <div className="card center">
      <img
        className="card-img-top"
        src="https://cdn.pixabay.com/photo/2016/12/13/04/22/toys-1903273__480.jpg"
        alt="Star Wars"
      />
      <div className="card-body">
        <h1 className="card-title">Name: {props.data.name}</h1>
        <div className="card-text">
          <h5 className="mb-0 mt-3">
            <span className="mr-1 ml-2 font-weight-bold">BirthYear :</span>
            <span className="ml-1">{props.data.birth_year}</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Cards;
