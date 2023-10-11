import React from "react";

const FormMeasurement = ({ saveState, state }) => {
  const updateState = (e) => {
    console.log(e.target);
    state[e.target.id] = e.target.value;

    saveState({ ...state });
  };
  return (
    <>
      <div className="mb-3 mt-2">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Kind:
        </label>
        <input
          type="text"
          className="form-control"
          id="kind"
          value={state.kind}
          placeholder="Kind"
          onChange={(e) => updateState(e)}
        />
      </div>
    </>
  );
};

export default FormMeasurement;
