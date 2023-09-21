import React from "react";

const FormSpecie = ({ listNameFamily, state, saveState }) => {
  const updateState = (e) => {
    console.log(e.target.value);
    state[e.target.id] = e.target.value;

    saveState({ ...state });
  };
  return (
    <>
      <div className="container">
        <form>
          <div className="row mb-3">
            <div className="mb-3">
              <div className="col-sm-10">
                <label htmlFor="validationDefault04" className="form-label">
                  Family
                </label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Select a family</option>
                  {listNameFamily.map((family) => {
                    return (
                      <option
                        value={family.id}
                        key={family.id}
                        id="id_family"
                        onClick={(e) => updateState(e)}
                      >
                        {family.name}
                      </option>
                    );
                  })}
                </select>
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
                  id="name"
                  placeholder="Name specie"
                  onChange={(e) => updateState(e)}
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
                  id="characteristics"
                  rows="3"
                  onChange={(e) => updateState(e)}
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
                      id="minT"
                      placeholder="°C"
                      onChange={(e) => updateState(e)}
                    />
                  </div>
                  -
                  <div className="col-sm-2">
                    <input
                      type="text"
                      className="form-control"
                      id="maxT"
                      placeholder="°C"
                      onChange={(e) => updateState(e)}
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
                    id="ph"
                    placeholder="Range ph"
                    onChange={(e) => updateState(e)}
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
