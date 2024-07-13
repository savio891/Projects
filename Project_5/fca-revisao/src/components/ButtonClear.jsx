import React from "react";

export default function ButtonClear(props) {
  return (
    <>
      <button
        type="button"
        onClick={props.click}
        className="btn btn-danger"
      >
        Limpar
      </button>
    </>
  );
}
