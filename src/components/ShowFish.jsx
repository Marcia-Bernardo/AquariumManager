import React from "react";
import CardFish from "./CardFish";

const ShowFish = ({ listNameRace, listFish, idRace }) => {
  const filterFish = listFish.filter((fish) => {
    return fish.id_race == idRace;
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="mt-5 mb-5">
            <h1>Show Fish</h1>
          </div>
          <CardFish listFish={filterFish} listNameRace={listNameRace} />
        </div>
      </div>
    </>
  );
};

export default ShowFish;
