import React from "react";
import { Link } from "react-router-dom";

const CardFish = ({ listNameRace, listFish }) => {
  return (
    <>
      {listFish.map((fish) => {
        const race = listNameRace.find((race) => {
          return race.id_race === fish.id_race;
        });
        console.log(race.img);

        return (
          <>
            <div className="card me-2" style={{ width: "20rem" }}>
              <img
                src={`/img/${race.img}`}
                className="card-img-top"
                alt="flame"
                width="40px"
                height="200px"
              />

              <div className="card-body">
                <h5 className="card-title">{race.name}</h5>

                <p className="card-text">Find out a little more about</p>

                <div className="row">
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Race: {race.name}</li>
                      <li className="list-group-item">
                        Generation:{fish.generation}
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Gender: {fish.gender}</li>
                    </ul>
                  </div>
                </div>

                <Link
                  to={`/fishDetails/${fish.id_fish}`}
                  className="btn btn-primary mt-3"
                >
                  Details
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardFish;
