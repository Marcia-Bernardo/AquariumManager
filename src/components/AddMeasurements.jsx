import React, { useState } from "react";
import Modal from "./Modal";
import FormMeasurement from "./FormMeasurement";

const AddMeasurements = ({
  listMeasurement,
  addKindMeasurement,
  saveMeasurement,
  addMeasurement,
}) => {
  const [chosenMeasurement, setChosenMeasurement] = useState();

  const [date, setDate] = useState("");
  const [value, setValue] = useState();
  const [observation, setObservation] = useState();

  // const measurementFilter = listMeasurement.filter(
  //   (measurements) => measurements.id === chosenMeasurement
  // );
  const saveForm = () => {
    if (chosenMeasurement === "" || chosenMeasurement === undefined) {
      console.log("no Kind Measurement");
      return;
    }
    if (date === "" || date === undefined) {
      console.log("no date");
      return;
    }
    if (value === "" || value === undefined) {
      console.log("no value");
      return;
    }
    if (observation === "" || observation === undefined) {
      console.log("no observation");
      return;
    }
    addMeasurement(chosenMeasurement, date, value, observation);
    setChosenMeasurement();
    setDate("");
    setValue();
    setObservation();
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-start mt-5">
          <div className="mt-5">
            <h1>Add Measurements</h1>
          </div>
          <div className="col-4 mt-3">
            <label htmlFor="validationDefault04" className="form-label mb-2">
              Measurement
            </label>
            <select
              className="form-select"
              id="validationDefault04"
              value={chosenMeasurement}
              required
            >
              <option value="">Select a kind</option>
              {listMeasurement.map((measurements) => {
                return (
                  <option
                    value={measurements.id}
                    key={measurements.id}
                    onClick={() => setChosenMeasurement(measurements.id)}
                  >
                    {measurements.kind}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-2 mt-5 mb-3">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Add kind
            </button>
          </div>
          <Modal
            title="Add Kind Measurement"
            id="1"
            saveForm={addKindMeasurement}
          >
            <FormMeasurement />
          </Modal>
        </div>
        <div className="form-date mt-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label"
            value={date}
            required
          >
            Date:
          </label>
          <input
            className="form-date-input ms-2"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <div className="mb-3 mt-3">
            <label htmlFor="formGroupExampleInput2" className="form-label">
              Value:
            </label>
            <div className="col-sm-1">
              <input
                type="number"
                className="form-control"
                id="value"
                min={0}
                placeholder="Range value"
                value={value || ""}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Observation:
            </label>
            <div className="col-sm-7">
              <textarea
                className="form-control"
                id="observation"
                rows="3"
                value={observation || ""}
                onChange={(e) => setObservation(e.target.value)}
              ></textarea>
            </div>
          </div>
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

export default AddMeasurements;
