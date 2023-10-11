import React from "react";

const FormFamilyRace = ({ listNameSpecie, showSelect, saveState, state }) => {
  const updateState = (e) => {
    state[e.target.id] = e.target.value;

    saveState({ ...state });
  };

  return (
    <div>
      {showSelect && (
        <>
          <label htmlFor="validationDefault04" className="form-label">
            Specie
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            id="id_sp"
            value={state.id_sp || "0"}
          >
            <option value="" key="">
              Select a specie
            </option>
            {listNameSpecie.map((specie) => {
              return (
                <option
                  value={specie.id_sp}
                  key={specie.id_sp}
                  id="id_sp"
                  onClick={(e) => {
                    updateState(e);
                  }}
                >
                  {specie.name}
                </option>
              );
            })}
          </select>
        </>
      )}
      <div className="mb-3 mt-2">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Name"
          value={state.name || ""}
          onChange={(e) => updateState(e)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Characteristics:
        </label>
        <textarea
          className="form-control"
          id="characteristics"
          rows="3"
          value={state.characteristics || ""}
          onChange={(e) => updateState(e)}
        ></textarea>
      </div>
    </div>
  );
};

export default FormFamilyRace;
