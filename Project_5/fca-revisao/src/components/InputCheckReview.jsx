import React from "react";

export default function InputCheckReview(props) {
  return (
    <>
      <input
        type="checkbox"
        className="custom-control-input"
        value={props.value}
        onChange={props.event}
        onClick={props.click}
        defaultChecked={props.checked}
      />
      <label className="custom-control-label" htmlFor="customControlAutosizing">
        Esta é a primeira revisão
      </label>
    </>
  );
}
