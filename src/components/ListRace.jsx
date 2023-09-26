import React from "react";
import { Link } from "react-router-dom";

const ListRace = ({
  listNameFamily,
  listNameSpecie,
  listNameRace,
  listFish,
}) => {
  const qtdFish = {};

  listFish.forEach((fish) => {
    if (!qtdFish[fish.id_race]) {
      qtdFish[fish.id_race] = 0;
    }
    qtdFish[fish.id_race] = qtdFish[fish.id_race] + 1;
  });

  return (
    <>
      <div className="container  mt-5">
        <div className="row">
          <div className="col-auto">
            <div className="m-3"></div>
            <h1>List Race</h1>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name Family </th>
                  <th scope="col">Name Specie</th>
                  <th scope="col">Name Race</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {listNameRace.map((race) => {
                  const specie = listNameSpecie.find((specie) => {
                    return specie.id_sp === race.id_sp;
                  });
                  const family = listNameFamily.find((family) => {
                    return family.id === specie.id_family;
                  });
                  return (
                    <tr>
                      <td>{family.name}</td>
                      <td>{specie.name}</td>
                      <td>{race.name}</td>
                      <td>{qtdFish[race.id_race]}</td>
                      <td>
                        <Link
                          class="btn btn-primary"
                          to={`/showFish/${race.id_race}`}
                        >
                          Show Fish
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListRace;
