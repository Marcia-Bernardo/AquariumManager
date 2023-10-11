import React from "react";
import CardFish from "../components/CardFish";

const ListFishCard = ({ listNameRace, listFish }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* <div className="col-auto"> */}
          <div className="mt-5 mb-4">
            <h1>List Fish</h1>
          </div>
          {/* </div> */}
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <CardFish listNameRace={listNameRace} listFish={listFish} />
        </div>
      </div>
    </>
  );
};

export default ListFishCard;
