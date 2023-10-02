import React from "react";
import Carrosel from "./Carrosel";
import Alert from "./Alert";

const Home = ({ listMeasurement }) => {
  return (
    <>
      <div className="mb-5 mt-5">
        <Carrosel />
      </div>
      <Alert listMeasurement={listMeasurement} />
    </>
  );
};

export default Home;
