import React from "react";
import { useState } from "react";
import Button from "../UI/Button/Button";
import InputElement from "../UI/InputElement/InputElement";

import classes from "./FilterationForm.module.css";

const FiltrationForm = ({ afterSubmit, allData }) => {
  const [formData, setFormData] = useState({
    logId: "",
    appId: "",
    actionType: "",
    appType: "",
    date: "",
  });
  // deconstructuring
  const { logId, appType, appId, actionType, date } = formData;
  //
  const logIdChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, logId: evet.target.value };
    });
  };
  const appIdChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, appId: evet.target.value };
    });
  };
  const actionTypeChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, actionType: evet.target.value };
    });
  };
  const appTypeChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, appType: evet.target.value };
    });
  };
  const dateChangeHandler = (evet) => {
    setFormData((prevState) => {
      return { ...prevState, date: evet.target.value };
    });
  };
  //
  const submitHandler = (evet) => {
    evet.preventDefault();
    //
    const filterationData = {
      logId,
      appType,
      appId,
      actionType,
      date,
    };
    // we can add validation here
    afterSubmit(filterationData);
    //
  };
  //
  return (
    <>
      <h1>Next.js Version</h1>
      <div className={classes.main}>
        <form onSubmit={submitHandler}>
          <InputElement
            id="logId"
            type="text"
            name="Log ID"
            value={logId}
            onChange={logIdChangeHandler}
            placeholder="Log ID Number"
          />

          <InputElement
            select={true}
            nullElement={true}
            id="appType"
            name="Application Type"
            value={appType}
            optionArray={[
              "CERT_TITLE_DEED_PLOT",
              "LEASE_REGISTRATION",
              "ADD_POA",
              "ADD_COMPANY",
              "ADD_COMPANY_EMPLOYEE",
              "CERT_PROP_OWNERSHIP",
            ]}
            onChange={appTypeChangeHandler}
            className={classes.select}
          />

          <InputElement
            id="appId"
            type="text"
            name="Application ID"
            value={appId}
            onChange={appIdChangeHandler}
            placeholder="Apllication ID Number Or -/-"
          />

          <InputElement
            select={true}
            nullElement={false}
            id="actionType"
            name="Action Type"
            value={actionType}
            optionArray={[
              "DARI_REFRESH_TOKEN",
              "DARI_APP_LOGIN",
              "INITIATE_APPLICATION",
              "SUBMIT_APPLICATION",
              "ADD_EMPLOYEE",
            ]}
            onChange={actionTypeChangeHandler}
            className={classes.select}
          />

          <InputElement
            id="date"
            type="date"
            name="Date"
            value={date}
            onChange={dateChangeHandler}
          />

          <Button type="submit" className={classes.btn}>
            Search
          </Button>
        </form>
      </div>
    </>
  );
};

export default React.memo(FiltrationForm);
