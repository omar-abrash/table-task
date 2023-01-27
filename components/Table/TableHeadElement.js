// import React from 'react'
import Button from "../UI/Button/Button";
import Image from "next/image";

import upImage from "../../assets/icons/top.jpg";
import downImage from "../../assets/icons/down.png";
//
const TableHeadElement = (props) => {
  return (
    <th>
      {props.name}
      <Button onClick={props.onClick} sort={true}>
        {!props.isSorting ? (
          <Image src={upImage} alt="up" />
        ) : (
          <Image src={downImage} alt="down" />
        )}
      </Button>
    </th>
  );
};

export default TableHeadElement;
