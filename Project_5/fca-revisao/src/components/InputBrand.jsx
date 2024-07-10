import { React} from "react";

export default function InputBrand(props) {
  

  return (
    <>
      <label className="mr-sm-2">Escolha a marca/combustível</label>
      <select value={props.value} onChange={props.event}>
        <option defaultValue={props.selected}>
          Selecione...
        </option>
        <option value={props.typeFirstOption}>Fiat /Flex</option>
        <option value={props.typeSecondOption}>Jeep/Flex</option>
        <option value={props.typeThirdOption}>Veículos Diesel</option>
      </select>
    </>
  );
}
