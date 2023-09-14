import React from "react";

const FormSpecie = () => {
  return (
    <>
      <div class="container">
        <form>
          <div class="row mb-3">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Family:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Name"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Name specie:
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Name specie"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <div class="col-sm-10">
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div class="row mb-3">
              <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">
                  Water temperature:
                </label>
                <div class="row mb-3">
                  <div class="col-sm-2">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Range temperature"
                    />
                  </div>
                  -
                  <div class="col-sm-2">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Range temperature"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">
                  Water ph:
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
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
