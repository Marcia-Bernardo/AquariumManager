import React from "react";
import Carrosel from "./Carrosel";
import AlertManager from "./AlertManager";

const Home = ({ listMeasurement }) => {
  return (
    <>
      <div className="mb-5 mt-5">
        <Carrosel />
      </div>

      <AlertManager listMeasurement={listMeasurement} />
    </>
  );
};

export default Home;
