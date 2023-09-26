import React from "react";
import FishDetails from "./FishDetails";

const Details = ({
  listNameFamily,
  listNameSpecie,
  listNameRace,
  listFish,
  idFish,
}) => {
  const filterFish = listFish.filter((fish) => {
    return fish.id_fish == idFish;
  });

  return (
    <>
      <FishDetails
        listNameFamily={listNameFamily}
        listNameSpecie={listNameSpecie}
        listNameRace={listNameRace}
        listFish={filterFish}
      />
    </>
  );
};

export default Details;
