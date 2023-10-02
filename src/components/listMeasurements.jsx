import React from "react";
import { getHigher } from "../util/dateParser";
import Measurement from "./Measurement";
import { timeDiference } from "../util/dateParser";

const ListMeasurements = ({ listMeasurement }) => {
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
      <div class="container px-4  mt-5">
        <div class="row gx-5">
          <div className="mt-5 mb-4">
            <h1>List measurements</h1>
          </div>

          <Measurement
            title="Changing the water"
            value={`${waterExchangeData.value} l`}
            date={waterExchangeData.date}
            type={calculateAlertType(differenceDay_waterExchange)}
          />
          <Measurement
            title="Water temperature"
            value={`${waterTemperatureData.value} °C`}
            date={waterTemperatureData.date}
            type={calculateAlertType(differenceDay_waterTemperatureData)}
          />

          <Measurement
            title="GH"
            value={gh_water.value}
            date={gh_water.date}
            type={calculateAlertType(differenceDay_gh_water)}
          />
          <Measurement
            title="Nitrito"
            value={nitrito_water.value}
            date={nitrito_water.date}
            type={calculateAlertType(differenceDay_nitrito_water)}
          />
          <Measurement
            title="Nitrato"
            value={nitrato_water.value}
            date={nitrato_water.date}
            type={calculateAlertType(differenceDay_nitrato_water)}
          />
          <Measurement
            title="Cloro"
            value={cloro_water.value}
            date={cloro_water.date}
            type={calculateAlertType(differenceDay_cloro_water)}
          />

          <Measurement
            title="kH"
            value={kH_water.value}
            date={kH_water.date}
            type={calculateAlertType(differenceDay_kH_water)}
          />

          <Measurement
            title="pH"
            value={pH_water.value}
            date={pH_water.date}
            type={calculateAlertType(differenceDay_pH_water)}
          />
        </div>
      </div>
    </>
  );
};

export default ListMeasurements;
