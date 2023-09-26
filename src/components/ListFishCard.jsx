import React from "react";
import CardFish from "../components/CardFish";

const ListFishCard = ({ listNameRace, listFish }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="m-4">
              <h1>List Fish</h1>
            </div>
            <CardFish listNameRace={listNameRace} listFish={listFish} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListFishCard;
