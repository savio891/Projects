import React from "react";

export default function InputRecentKilometer(props) {
  return (
    <>
      <label>Quilometragem revisão recente:</label>
      <input
        type="number"
        value={props.value}
        min="0"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={props.event}
      ></input>
    </>
  );
}
