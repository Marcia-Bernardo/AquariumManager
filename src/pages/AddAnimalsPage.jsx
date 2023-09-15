import React from "react";
import AddFish from "../components/AddFish";

const AddAnimalsPage = ({ allFamilies, allSpecies, addfish, allRace }) => {
  return (
    <>
      <AddFish
        nameFamily={allFamilies}
        nameSpecie={allSpecies}
        saveFish={addfish}
        nameRace={allRace}
      />
    </>
  );
};

export default AddAnimalsPage;
