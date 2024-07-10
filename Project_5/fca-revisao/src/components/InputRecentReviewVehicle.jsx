import React from "react";

export default function InputRecentReviewVehicle(props) {
  return (
    <>
      <label>{props.label}</label>
      <input
        type="date"
        value={props.value}
        onChange={props.event}
      ></input>
    </>
  );
}
