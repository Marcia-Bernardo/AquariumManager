import React from "react";
import { getHigher } from "../util/dateParser";
import { timeDiference } from "../util/dateParser";
import AlertMessage from "./AlertMessage";

const Alert = ({ listMeasurement }) => {
  const waterChange = listMeasurement.find((measurement) => {
    return measurement.kind === "Changing the water";
  });
  const waterTemperature = listMeasurement.find((measurement) => {
    return measurement.kind === "Water temperature";
  });
  const gh = listMeasurement.find((measurement) => {
    return measurement.kind === "GH";
  });
  const nitrito = listMeasurement.find((measurement) => {
    return measurement.kind === "Nitrito";
  });
  const nitrato = listMeasurement.find((measurement) => {
    return measurement.kind === "Nitrato";
  });
  const cloro = listMeasurement.find((measurement) => {
    return measurement.kind === "Cloro";
  });
  const kH = listMeasurement.find((measurement) => {
    return measurement.kind === "kH";
  });
  const pH = listMeasurement.find((measurement) => {
    return measurement.kind === "pH";
  });
  const waterExchangeData = waterChange.measurement.find((water) => {
    return water.id === getHigher(waterChange.measurement);
  });

  const waterTemperatureData = waterTemperature.measurement.find((water) => {
    return water.id === getHigher(waterTemperature.measurement);
  });

  const gh_water = gh.measurement.find((water) => {
    return water.id === getHigher(gh.measurement);
  });

  const nitrito_water = nitrito.measurement.find((water) => {
    return water.id === getHigher(nitrito.measurement);
  });
  const nitrato_water = nitrato.measurement.find((water) => {
    return water.id === getHigher(nitrato.measurement);
  });
  const cloro_water = cloro.measurement.find((water) => {
    return water.id === getHigher(cloro.measurement);
  });
  const kH_water = kH.measurement.find((water) => {
    return water.id === getHigher(kH.measurement);
  });
  const pH_water = pH.measurement.find((water) => {
    return water.id === getHigher(pH.measurement);
  });

  const differenceDay_waterExchange = timeDiference(waterExchangeData.date);
  const differenceDay_waterTemperatureData = timeDiference(
    waterTemperatureData.date
  );
  const differenceDay_gh_water = timeDiference(gh_water.date);
  const differenceDay_nitrito_water = timeDiference(nitrito_water.date);
  const differenceDay_nitrato_water = timeDiference(nitrato_water.date);
  const differenceDay_cloro_water = timeDiference(cloro_water.date);
  const differenceDay_kH_water = timeDiference(kH_water.date);
  const differenceDay_pH_water = timeDiference(pH_water.date);
  console.log(differenceDay_pH_water);

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
    <>
      {differenceDay_waterExchange >= 14 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_waterExchange)}
            kind={waterChange.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_waterTemperatureData >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_waterTemperatureData)}
            kind={waterTemperature.kind.toUpperCase()}
          />
        </b>
      )}

      {differenceDay_gh_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_gh_water)}
            kind={gh.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_nitrato_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_nitrito_water)}
            kind={nitrito.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_nitrato_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_nitrato_water)}
            kind={nitrato.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_cloro_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_cloro_water)}
            kind={cloro.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_kH_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_kH_water)}
            kind={kH.kind.toUpperCase()}
          />
        </b>
      )}
      {differenceDay_pH_water >= 12 && (
        <b>
          <AlertMessage
            type={calculateType(differenceDay_pH_water)}
            kind={pH.kind.toUpperCase()}
          />
        </b>
      )}
    </>
  );
};

export default Alert;
