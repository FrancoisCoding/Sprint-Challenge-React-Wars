import React, { useState, useEffect } from "react";
import axios from "axios";
import People from "./components/People";

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      setData(response.data);
    });
  }, []);
  return (
    <>
      <People data={data} />
    </>
  );
}

export default Data;
