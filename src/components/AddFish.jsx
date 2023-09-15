import React, { useState } from "react";
import Modal from "./Modal";
import FormFamily from "./FormFamily";
import FormSpecie from "./FormSpecie";

const AddFish = ({ nameFamily, nameSpecie, saveFish, nameRace }) => {
  const [chosenFamily, setChosenFamily] = useState();
  const [chosenSpecie, setChosenSpecie] = useState();
  const [chosenRace, setChosenRace] = useState();
  const [gender, setGender] = useState();
  const [arrivalDate, setArrivalDate] = useState("");
  const [dateDeath, setDateDeath] = useState("");
  const [breedingDate, setBreedingDate] = useState("");

  const specieFilter = nameSpecie.filter(
    (specie) => specie.id_family === chosenFamily
  );
  const raceFilter = nameRace.filter((race) => race.id_sp === chosenSpecie);

  const saveForm = () => {
    if (chosenFamily === "" || chosenFamily === undefined) {
      console.log("no Family");
      return;
    }
    if (chosenSpecie === "" || chosenSpecie === undefined) {
      console.log(" no Specie");
      return;
    }
    if (chosenRace === "" || chosenRace === undefined) {
      console.log(" no Race");
      return;
    }
    if (gender === "" || gender === undefined) {
      console.log("no Gender");
      return;
    }
    if (arrivalDate === "" || arrivalDate === undefined) {
      console.log("no arrival date");
      return;
    }

    saveFish(0, gender, arrivalDate, dateDeath, breedingDate);
  };

  return (
    <>
      <div className="container mt-5">
        <h1>Add Fish</h1>
        <div className="row align-items-start">
          <div className="col-4 mt-3">
            <label htmlFor="validationDefault04" className="form-label">
              Family
            </label>
            <select className="form-select" id="validationDefault04" required>
              <option>Select a family</option>
              {nameFamily.map((family) => {
                return (
                  <option
                    value=""
                    key={family.id}
                    onClick={() => setChosenFamily(family.id)}
                  >
                    {family.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2 mt-5">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Add Family
            </button>
          </div>
          <Modal title="Add Family" id="1">
            <FormFamily />
          </Modal>
        </div>

        <div className="row align-items-start">
          <div className="col-4 mt-3">
            <label htmlFor="validationDefault04" className="form-label">
              Specie
            </label>
            <select className="form-select" id="validationDefault04" required>
              <option key={0}>Select a specie</option>
              {specieFilter.map((specie) => {
                return (
                  <option
                    value=""
                    key={specie.id}
                    onClick={() => setChosenSpecie(specie.id_sp)}
                  >
                    {specie.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2 mt-5">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              Add Specie
            </button>
          </div>
          <Modal title="Add Specie" id="2">
            <FormSpecie />
          </Modal>
        </div>
        <div className="row align-items-start">
          <div className="col-4 mt-3">
            <label htmlFor="validationDefault04" className="form-label">
              Race
            </label>
            <select className="form-select" id="validationDefault04" required>
              <option key={0}>Select a race</option>
              {raceFilter.map((race) => {
                return (
                  <option
                    value=""
                    key={race.id}
                    onClick={() => setChosenRace(race.id_race)}
                  >
                    {race.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2 mt-5">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal3"
            >
              Add Race
            </button>
          </div>
          <Modal title="Add Race" id="3">
            <FormFamily />
          </Modal>
        </div>
        <fieldset className="row mb-4 mt-4">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>

          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                onClick={() => setGender("Female")}
              />
              <label className="form-check-label" htmlFor="gridRadios1">
                Female
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                onClick={() => setGender("Male")}
              />
              <label className="form-check-label" htmlFor="gridRadios2">
                Male
              </label>
            </div>
          </div>
        </fieldset>
        <div className="form-date">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Arrival Date:
          </label>
          <input
            className="form-date-input ms-2"
            type="date"
            id="date"
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
          ></input>
        </div>
        <div className="form-date mt-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Date of death:
          </label>
          <input
            className="form-date-input ms-2"
            type="date"
            id="date"
            value={dateDeath}
            onChange={(e) => setDateDeath(e.target.value)}
          ></input>
        </div>
        <div className="form-date mt-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Breeding date:
          </label>
          <input
            className="form-date-input ms-2"
            type="date"
            id="date"
            value={breedingDate}
            onChange={(e) => setBreedingDate(e.target.value)}
          ></input>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-3 mb-3"
          onClick={saveForm}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddFish;
