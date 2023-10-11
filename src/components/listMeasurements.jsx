import React from "react";

import Measurement from "./Measurement";
import { getHigher, timeDiference } from "../util/dateParser";

const ListMeasurements = ({ listMeasurement }) => {
  const higher = (measurement) => {
    return measurement.find((item) => {
      return item.id === getHigher(measurement.measurement);
    });
  };

  const differenceDay = (date) => {
    return timeDiference(date);
  };

  const calculateAlertType = (days) => {
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
    <>
      <div className="container m-5">
        <div className="row gx-5">
          <div className="mt-5 mb-4">
            <h1>List measurements</h1>
          </div>
          {listMeasurement.map((measuruments) => {
            if (measuruments.measurement.lenght > 0) {
              return (
                <Measurement
                  title={measuruments.kind}
                  value={`${
                    measuruments.measurement[higher(measuruments.measurement)]
                      .value
                  } °C`}
                  date={
                    measuruments.measurement[higher(measuruments.measurement)]
                      .date
                  }
                  type={calculateAlertType(
                    differenceDay(
                      measuruments.measurement[higher(measuruments.measurement)]
                        .date
                    )
                  )}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default ListMeasurements;
