import React from "react";

const FishDetails = ({
  listNameFamily,
  listNameSpecie,
  listNameRace,
  listFish,
  idRace,
}) => {
  return (
    <>
      {listFish.map((fish) => {
        const race = listNameRace.find((race) => {
          return race.id_race === fish.id_race;
        });
        const specie = listNameSpecie.find((specie) => {
          return specie.id_specie === race.id_specie;
        });
        const family = listNameFamily.find((family) => {
          return family.id === specie.id_family;
        });

        return (
          <div className="container mt-5">
            <div className="row align-items-start">
              <div className="mt-5 mb-4">
                <h1>Fish details</h1>
              </div>
              <div className="col-3">
                <img
                  src={`/img/${race.img}`}
                  className="card-img-top"
                  alt="flame"
                  width="40px"
                  height="200px"
                />
              </div>
              <div className="col-7 ">
                <div className="ms-5 mb-3 mt-2">
                  <h5>
                    <span style={{ fontWeight: "bold" }}>Race name: </span>
                    {race.name}
                  </h5>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Generation:</span>
                    {fish.generation}
                  </p>
                </div>

                <div className="ms-5">
                  <p>
                    <span style={{ fontWeight: "bold" }}>
                      Characteristics:{" "}
                    </span>
                    {race.characteristics}
                  </p>
                </div>
              </div>
              <div className="col-3 ">
                <div></div>
              </div>

              <div className="col-4">
                <div className="ms-5">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Arrival date: </span>
                    {fish.arrival_date}
                  </p>
                  {fish.gender === "Female" && (
                    <p>
                      <span style={{ fontWeight: "bold" }}>
                        Breeding date:{" "}
                      </span>
                      {fish.breeding_date}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-4 ">
                <div className="ms-5">
                  <p>
                    <span style={{ fontWeight: "bold" }}>Date of death: </span>
                    {fish.date_of_death}
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Gender: </span>
                    {fish.gender}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="row align-items-center">
              <div class="col-8">
                <div className="text-center mb-3">
                  <h5>
                    <span style={{ fontWeight: "bold" }}>Specie Name: </span>
                    {specie.name}
                  </h5>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Characteristics: </span>
                  {specie.characteristics}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Minimum temperature:{" "}
                  </span>
                  {specie.minTemp} °C
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>
                    Maximum temperature:{" "}
                  </span>
                  {specie.maxTemp} °C
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>pH of water: </span>
                  {specie.water_ph}
                </p>
              </div>
            </div>
            <hr />
            <div class="row ">
              <div class="col-8">
                <div className="text-center mb-3">
                  <h5>
                    <span style={{ fontWeight: "bold" }}>Family Name: </span>
                    {family.name}
                  </h5>
                </div>
                <p>
                  <span style={{ fontWeight: "bold" }}>Characteristics: </span>
                  {family.characteristics}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FishDetails;
