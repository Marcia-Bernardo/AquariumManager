import React from "react";

const Measurement = ({ title, value, date, type }) => {
  return (
    <div class="col-3 mt-3">
      <div class={`card mb-5 alert alert-${type}`} role="alert">
        <div class="card-body">
          <h5 className="text-center">
            <span style={{ fontWeight: "bold" }}>{title}</span>
          </h5>
          <div className="text-center p-3">{value}</div>
          <div className="p-3">Date: {date}</div>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
