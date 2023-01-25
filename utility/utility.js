export const getData = async (mainURL) => {
  try {
    const response = await fetch(mainURL);
    if (!response.ok) {
      throw new Error("Error in fetching Data !");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    return e.message;
  }
};

export const NumberOfPages = (length) => {
  if (length % 10 === 0) {
    return length / 10;
  } else {
    return length / 10 + 1;
  }
};

// this function for array filteration
// we can add another possible choices
export const filterationDataFun = (mainArray, dataObject) => {
  const { logId, appType, appId, actionType, date } = dataObject;
  // if all inputs are empty
  if (!logId && !appType && !appId && !actionType && !date) {
    return mainArray;
  }
  // if logId entered
  if (logId && !appType && !appId && !actionType && !date) {
    return mainArray.filter((item) => item.logId === Number(logId));
  }
  // if application type entered
  if (!logId && appType !== "" && !appId && !actionType && !date) {
    if (appType === "null") {
      return mainArray.filter((item) => item.applicationType === null);
    } else {
      return mainArray.filter((item) => item.applicationType === appType);
    }
  }
  // if application Id entered
  if (!logId && !appType && appId && !actionType && !date) {
    if (appId === "-/-") {
      return mainArray.filter((item) => item.applicationId === null);
    } else {
      return mainArray.filter((item) => item.applicationId === Number(appId));
    }
  }
  // if actionType entered
  if (!logId && !appType && !appId && actionType && !date) {
    return mainArray.filter((item) => item.actionType === actionType);
  }
  // if date entered
  if (!logId && !appType && !appId && !actionType && date) {
    return mainArray.filter(
      (item) => item.creationTimestamp.slice(0, 10) === date
    );
  }
  // if application type && action Type are entered
  if (!logId && appType !== "" && !appId && actionType && !date) {
    if (appType === "null") {
      return mainArray.filter(
        (item) =>
          item.applicationType === null && item.actionType === actionType
      );
    } else {
      return mainArray.filter(
        (item) =>
          item.applicationType === appType && item.actionType === actionType
      );
    }
  }
  // we can make another data filteration options
};
