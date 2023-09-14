import React from "react";
import Modal from "./Modal";
import FormFamily from "./FormFamily";
import FormSpecie from "./FormSpecie";

const AddFish = () => {
  return (
    <>
      <div className="container mt-5">
        <form>
          <h1>Add Fish</h1>
          <div className="row align-items-start">
            <div className="col-4 mt-3">
              <label for="validationDefault04" className="form-label">
                Family
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
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
              <label for="validationDefault04" className="form-label">
                Specie
              </label>
              <select className="form-select" id="validationDefault04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option>...</option>
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
          <fieldset className="row mb-4 mt-4">
            <legend className="col-form-label col-sm-2 pt-0">Gênero</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios1"
                  value="option1"
                  checked
                />
                <label className="form-check-label" for="gridRadios1">
                  Female
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="gridRadios2"
                  value="option2"
                />
                <label className="form-check-label" for="gridRadios2">
                  Male
                </label>
              </div>
            </div>
          </fieldset>
          <div className="form-date">
            <label for="exampleFormControlInput1" className="form-label">
              Arrival Date:
            </label>
            <input
              className="form-date-input ms-2"
              type="date"
              id="date"
            ></input>
          </div>
          <div className="form-date mt-3">
            <label for="exampleFormControlInput1" className="form-label">
              Date of death:
            </label>
            <input
              className="form-date-input ms-2"
              type="date"
              id="date"
            ></input>
          </div>
          <div className="form-date mt-3">
            <label for="exampleFormControlInput1" className="form-label">
              Breeding date:
            </label>
            <input
              className="form-date-input ms-2"
              type="date"
              id="date"
            ></input>
          </div>

          <button type="submit" className="btn btn-primary mt-3 mb-3 ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddFish;
