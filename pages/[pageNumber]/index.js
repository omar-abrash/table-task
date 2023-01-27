import { useState, useCallback, useMemo } from "react";
import { useRouter } from "next/router";

import FiltrationForm from "@/components/FiltrationForm/FiltrationForm";
import Table from "@/components/Table/Table";
import Navigation from "@/components/Navigation/Navigation";
import { getData, NumberOfPages, filterationDataFun } from "@/utility/utility";

const mainURL = "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f";

const PageNumber = (props) => {
  // add useMemo to fix mainArray if not change
  const [mainArray, setMainArray] = useState(
    useMemo(() => {
      return props.mainArray;
    }, [props.mainArray])
  );
  // add useCallback to fix NumberOfPages Fun
  const numberOfPages = useCallback(NumberOfPages(mainArray.length), [
    mainArray.length,
  ]);

  const pageNumber = Number(props.pageNumber.replace("page", ""));
  const router = useRouter();
  //
  // add useCallback here to fix the filteration func
  const filterationHandler = useCallback((filterationData) => {
    router.push("/page1");
    // go to the filteration function
    setMainArray((prevState) =>
      filterationDataFun(props.mainArray, filterationData)
    );
  }, []);
  //
  return (
    <div>
      <FiltrationForm afterSubmit={filterationHandler} />
      <Table pageNumber={pageNumber} mainArray={mainArray} />
      <Navigation numperOfPages={numberOfPages} pageNumber={props.pageNumber} />
    </div>
  );
};
export default PageNumber;
//
//
//
export const getStaticProps = async (context) => {
  // prepare all data from api
  const data = await getData(mainURL);
  const mainArray = await data.result.auditLog; // refixing this line (add await)
  // prepare dynamic Page number [pageNumber]
  const pageNumber = context.params.pageNumber;

  return {
    props: {
      mainArray: mainArray,
      pageNumber: pageNumber,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  // prepare all data from api
  const data = await getData(mainURL);
  const mainArray = data.result.auditLog;
  const numberOfPages = NumberOfPages(mainArray.length);
  // prepare all possible pages
  let paramsArray = [];
  for (let i = 0; i <= numberOfPages; i++) {
    paramsArray.push({ params: { pageNumber: `page${i}` } }); // dynamic for all pages
  }

  return {
    fallback: false,
    // paths: [{ params: { pageNumber: "page1" } }], // static path for page1
    paths: paramsArray,
  };
};
