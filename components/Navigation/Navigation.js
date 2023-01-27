import React from "react";
import { useState, useEffect } from "react";

import Item from "./Item";
import classes from "./Navigation.module.css";

const Navigation = ({ numperOfPages, pageNumber }) => {
  const [navArray, setNavArray] = useState([]);
  // console.log("navigation!"); // this console to test memo
  // helper function
  const listArrayHandler = () => {
    let listArray = [];
    for (let i = 1; i <= numperOfPages; i++) {
      listArray.push(i.toString());
    }
    return listArray;
  };

  //
  useEffect(() => {
    setNavArray((prevState) => listArrayHandler());
  }, [numperOfPages]);

  //
  return (
    <nav className={classes.main}>
      <ul>
        {navArray.map((element) => (
          <Item key={element} item={element} />
        ))}
      </ul>
      <h3>{pageNumber}</h3>
    </nav>
  );
};

export default React.memo(Navigation);
