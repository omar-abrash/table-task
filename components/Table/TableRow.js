// import React from 'react'

const TableRow = ({ element }) => {
  return (
    <tr key={element.logId}>
      <td>{element.logId}</td>
      <td>{!element.applicationType ? "-/-" : element.applicationType}</td>
      <td>{!element.applicationId ? "-/-" : element.applicationId}</td>
      <td>{element.actionType}</td>
      <td>-/-</td>
      <td>{element.creationTimestamp}</td>
    </tr>
  );
};

export default TableRow;
