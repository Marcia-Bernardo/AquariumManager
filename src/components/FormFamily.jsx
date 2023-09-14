import React from "react";

const FormFamily = () => {
  return (
    <div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name Family:
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Characteristics:
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default FormFamily;
