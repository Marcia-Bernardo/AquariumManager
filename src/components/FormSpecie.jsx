import React from "react";

const FormSpecie = () => {
  return (
    <>
      <div className="container">
        <form>
          <div className="row mb-3">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Family:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Name specie:
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Name specie"
                />
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Characteristics:
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">
                  Water temperature:
                </label>
                <div className="row mb-3">
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="°C"
                    />
                  </div>
                  -
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="°C"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">
                  Water ph:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Range ph"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSpecie;
