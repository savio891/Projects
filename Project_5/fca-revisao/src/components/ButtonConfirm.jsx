import React from "react";

export default function ButtonConfirm(props) {
  return (
    <>
      <button
        type="button"
        onClick={props.click}
        className="btn btn-primary"
      >
        Verificar
      </button>
    </>
  );
}
