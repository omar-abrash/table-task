import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import TableRow from "./TableRow";
import Button from "../UI/Button/Button";
import upImage from "../../assets/icons/top.jpg";
import downImage from "../../assets/icons/down.png";
import TableHeadElement from "./TableHeadElement";

import classes from "./Table.module.css";

const Table = ({ pageNumber, mainArray }) => {
  const [subArray, setSubArray] = useState([]);
  const router = useRouter();
  //
  // const queryParams = new URLSearchParams(`/page${pageNumber}`.search);
  const queryParams = router.query;
  const isSorting = queryParams.sort === "revers";
  let sortingSubArray = subArray;
  if (isSorting) {
    sortingSubArray = subArray.reverse();
  }
  //
  const sortHanlder = () => {
    router.push(`page${pageNumber}?sort=${isSorting ? "normal" : "revers"}`);
  };
  //
  useEffect(() => {
    setSubArray((prevState) =>
      mainArray.slice(pageNumber * 10 - 10, pageNumber * 10)
    );
    // this aproch to slice main array of 10 elements depend of page number
    // if pageNumber = 1 ::> first 10 element
    // if pageNumber =2 ::> second 10 element and so on ....
    // we can make test unit for this point
  }, [pageNumber, mainArray, isSorting]);
  //
  return (
    <>
      {mainArray.length === 0 ? (
        <p>No Data</p>
      ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <TableHeadElement
                name="Log ID"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />

              <TableHeadElement
                name="Application Type"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />

              <TableHeadElement
                name="Application ID"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />

              <TableHeadElement
                name="Action Type"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />
              <TableHeadElement
                name="Action Details"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />

              <TableHeadElement
                name="Date:Time"
                images={[upImage, downImage]}
                onClick={sortHanlder}
                isSorting={isSorting}
              />
            </tr>
          </thead>
          <tbody>
            {sortingSubArray.map((element) => (
              <TableRow key={element.logId} element={element} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default React.memo(Table);
