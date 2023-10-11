import React from "react";

import Alert from "./Alert";

const AlertManager = ({ listMeasurement }) => {
  if (listMeasurement.lenght === undefined) {
    return null;
  }

  return (
    <>
      {listMeasurement.map((measurement) => {
        if (measurement.measurement.lenght > 0) {
          return (
            <Alert
              kind={measurement.kind}
              measurement={measurement.measurement}
            />
          );
        }
        return null;
      })}
    </>
  );
};

export default AlertManager;
