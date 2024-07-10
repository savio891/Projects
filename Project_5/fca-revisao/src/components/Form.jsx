import React from "react";
import "../components/styles/Form.css";
import { useState} from "react";
import InputBrand from "./InputBrand";
import InputCheckReview from "./InputCheckReview";
import InputPreviousReviewVehicle from "./InputPreviousReviewVehicle";
import InputRecentReviewVehicle from "./InputRecentReviewVehicle";
import InputPreviousKilometer from "./InputPreviousKilometer";
import InputRecentKilometer from "./InputRecentKilometer";
import ButtonConfirm from "./ButtonConfirm";
import ButtonClear from "./ButtonClear";
import Warning from "./Warning";
import Danger from "./Danger";
import Success from "./Success";

export default function Form() {
  const [typeBrand, setTypeBrand] = useState("");
  const [isFirstReview, setIsFirstReview] = useState();
  const [previousVehicleReview, setPreviousVehicleReview] = useState("");
  const [recentVehicleReview, setRecentVehicleReview] = useState("");
  const [previousKilometer, setPreviousKilometer] = useState("");
  const [recentKilometer, setRecentKilometer] = useState("");
  const [resultado, setResultado] = useState();

  function resetValues() {
    setTypeBrand("");
    setPreviousVehicleReview("");
    setRecentVehicleReview("");
    setPreviousKilometer("");
    setRecentKilometer("");
    setResultado("");
  }

  function calculateDatasReview() {

    if (typeBrand == "fiat") {
      const previousReview = new Date(previousVehicleReview).getTime();
      const recentReview = new Date(recentVehicleReview).getTime();
      const previousKilometerNumber = Number(previousKilometer);
      const recentKilometerNumber = Number(recentKilometer);
      const reviewInterval = recentReview - previousReview;
      const numberDays = Math.floor(reviewInterval / (1000 * 60 * 60 * 24));
      const differenceBetweenReviews = recentKilometerNumber - previousKilometerNumber;
      const mileageExceeded = recentKilometer - 11000;

      if (previousKilometerNumber > recentKilometerNumber) {
        setResultado(
          <Warning label="Não é permitido que a quilometragem da revisão anterior seja maior do que a atual!" />
        );
      } else if(previousReview > recentReview) {
        setResultado(
          <Warning label="Não é permitido que a data da revisão anterior seja maior do que a atual!" />
        );
      } else {
        if (differenceBetweenReviews < 9000) {
          if (numberDays >= 335 && numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por tempo, revisão regular." />
            );
          } else if (numberDays < 335) {
            setResultado(
              <Danger label="Revisão antecipada, fora do tempo mínimo de tolerância de 30 dias." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, fora do tempo máximo de tolerância de 30 dias." />
            );
          }
        } else if (
          differenceBetweenReviews >= 9000 &&
          differenceBetweenReviews <= 11000
        ) {
          if (numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por quilometragem, revisão regular." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, no máximo 30 dias de tolerância." />
            );
          }
        } else {
          setResultado(
            <Danger label={`Revisão fora da quilometragem, ultrapasando ${mileageExceeded} KM, falha no plano de manutenção do seu veículo.`}/>
          );
        }
      }
    } else if (typeBrand == "jeep") {

      const previousReview = new Date(previousVehicleReview).getTime();
      const recentReview = new Date(recentVehicleReview).getTime();
      const previousKilometerNumber = Number(previousKilometer);
      const recentKilometerNumber = Number(recentKilometer);
      const reviewInterval = recentReview - previousReview;
      const numberDays = Math.floor(reviewInterval / (1000 * 60 * 60 * 24));
      const differenceBetweenReviews = recentKilometerNumber - previousKilometerNumber;
      const mileageExceeded = recentKilometer - 13000;

        if (previousKilometerNumber > recentKilometerNumber) {
          setResultado(
            <Warning label="Não é permitido que a quilometragem da revisão anterior seja maior do que a atual!" />
          );
        } else if(previousReview > recentReview) {
          setResultado(
            <Warning label="Não é permitido que a data da revisão anterior seja maior do que a atual!" />
          );
      } else {
        if (differenceBetweenReviews < 11000) {
          if (numberDays >= 335 && numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por tempo, revisão regular." />
            );
          } else if (numberDays < 335) {
            setResultado(
              <Danger label="Revisão antecipada, fora do tempo mínimo de tolerância de 30 dias." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, fora do tempo máximo de tolerância de 30 dias." />
            );
          }
        } else if (
          differenceBetweenReviews >= 11000 &&
          differenceBetweenReviews <= 13000
        ) {
          if (numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por quilometragem, revisão regular." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, no máximo 30 dias de tolerância." />
            );
          }
        } else {
          setResultado(
            <Danger label={`Revisão fora da quilometragem, ultrapasando ${mileageExceeded} KM, falha no plano de manutenção do seu veículo.`}/>
          );
        }
      }

    } else if (typeBrand == "diesel") {

      const previousReview = new Date(previousVehicleReview).getTime();
      const recentReview = new Date(recentVehicleReview).getTime();
      const previousKilometerNumber = Number(previousKilometer);
      const recentKilometerNumber = Number(recentKilometer);
      const reviewInterval = recentReview - previousReview;
      const numberDays = Math.floor(reviewInterval / (1000 * 60 * 60 * 24));
      const differenceBetweenReviews = recentKilometerNumber - previousKilometerNumber;
      const mileageExceeded = recentKilometer - 21000;

        if (previousKilometerNumber > recentKilometerNumber) {
          setResultado(
            <Warning label="Não é permitido que a quilometragem da revisão anterior seja maior do que a atual!" />
          );
        } else if(previousReview > recentReview) {
          setResultado(
            <Warning label="Não é permitido que a data da revisão anterior seja maior do que a atual!" />
          );
      } else {
        if (differenceBetweenReviews < 19000) {
          if (numberDays >= 335 && numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por tempo, revisão regular." />
            );
          } else if (numberDays < 335) {
            setResultado(
              <Danger label="Revisão antecipada, fora do tempo mínimo de tolerância de 30 dias." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, fora do tempo máximo de tolerância de 30 dias." />
            );
          }
        } else if (
          differenceBetweenReviews >= 19000 &&
          differenceBetweenReviews <= 21000
        ) {
          if (numberDays <= 396) {
            setResultado(
              <Success label="Cliente fez a revisão por quilometragem, revisão regular." />
            );
          } else if (numberDays > 396) {
            setResultado(
              <Danger label="Revisão fora do prazo, no máximo 30 dias de tolerância." />
            );
          }
        } else {
          setResultado(
            <Danger label={`Revisão fora da quilometragem, ultrapasando ${mileageExceeded} KM, falha no plano de manutenção do seu veículo.`}/>
          );
        }
      }
    } else {
      return false;
    }
  }

  return (
    <form>
      <div className="form-row align-items-center">
        <div className="col-auto my-1">
          <InputBrand
            value={typeBrand}
            event={(e) => setTypeBrand(e.target.value)}
            typeFirstOption="fiat"
            typeSecondOption="jeep"
            typeThirdOption="diesel"
            selected
          />
        </div>
        <div className="col-auto my-1">
          <div className="custom-control custom-checkbox mr-sm-2">
            <InputCheckReview
              value={isFirstReview}
              event={(e) => setIsFirstReview(e.target.checked)}
              checked={false}
            />
            {isFirstReview == true ? (
              <div className="form-data">
                <InputPreviousReviewVehicle
                  label="Data Início da Garantia:"
                  value={previousVehicleReview}
                  event={(e) => setPreviousVehicleReview(e.target.value)}
                />
              </div>
            ) : (
              <div className="form-data">
                <InputPreviousReviewVehicle
                  label="Data Revisão Anterior:"
                  value={previousVehicleReview}
                  event={(e) => setPreviousVehicleReview(e.target.value)}
                />
              </div>
            )}
            <div className="form-data">
              <InputRecentReviewVehicle
                label="Data revisão recente:"
                value={recentVehicleReview}
                event={(e) => setRecentVehicleReview(e.target.value)}
              />
            </div>
            {isFirstReview == true ? (
              <div className="form-data">
                <InputPreviousKilometer
                  value={previousKilometer}
                  event={() => setPreviousKilometer(0)}
                  disabled
                />
              </div>
            ) : (
              <div className="form-data">
                <InputPreviousKilometer
                  value={previousKilometer}
                  event={(e) => setPreviousKilometer(e.target.value)}
                />
              </div>
            )}
            <div className="form-data">
              <InputRecentKilometer
                value={recentKilometer}
                event={(e) => setRecentKilometer(e.target.value)}
              />
              <br />
              <ButtonConfirm click={calculateDatasReview} />
              <ButtonClear click={() => resetValues()} />
              {resultado}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
