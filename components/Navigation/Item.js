// import React from 'react'
import Link from "next/link";

const Item = ({ item }) => {
  return (
    <li>
      <Link href={`page${item}`}>{item}</Link>
    </li>
  );
};

export default Item;
