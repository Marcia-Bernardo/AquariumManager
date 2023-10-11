import React from "react";
import { getHigher, timeDiference } from "../util/dateParser";
import AlertMessage from "./AlertMessage";

const Alert = ({ measurement, kind }) => {
  const measurementData = measurement.find((item) => {
    return item.id === getHigher(measurement.measurement);
  });

  const differenceDay = timeDiference(measurementData.date);
  const calculateType = (days) => {
    let type = "primary";
    if (days >= 12 || days === 13) {
      type = "warning";
    }
    if (days > 14) {
      type = "danger";
    }
    return type;
  };
  return (
    <div>
      {differenceDay >= 14 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay)}
            kind={kind.toUpperCase()}
          />
        </b>
      )}
    </div>
  );
};

export default Alert;
