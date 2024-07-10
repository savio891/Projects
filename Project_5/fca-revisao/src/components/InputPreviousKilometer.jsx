import React from "react";

export default function InputPreviousKilometer(props) {
  return (
    <>
      <label>Quilometragem revisão anterior:</label>
      <input
        type="number"
        value={props.value}
        min="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={props.event}
        disabled={props.disabled}
      ></input>
    </>
  );
}
