import React from "react";
import Form from "./Form";

export default function Content() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">Plano de Manutenção FCA</div>
        <div className="card-body">
          <h5 className="card-title">
            Confira o plano de manutenção do seu veículo
          </h5>
          <p className="card-text">
            Preencha o formulário abaixo e verifique se a revisão em específica foi feita
            dentro dos critérios da FCA.
          </p>
          <div className="col">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
