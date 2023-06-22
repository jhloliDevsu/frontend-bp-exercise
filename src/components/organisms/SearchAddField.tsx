import Button from "components/atoms/Button";
import Textfield from "components/molecules/Textfield";
import { ROUTES } from "enums/routes";
import React, { CSSProperties } from "react";
import {useNavigate} from "react-router-dom";

interface Props {
  setSearch: (value: string) => void;
}

const style: CSSProperties = {
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "auto auto",
  alignItems: "center",
}

const SearchAddField: React.FC<Props> = ({setSearch}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.ADD_PRODUCT);
  }

  return (
    <div style={style}>
      <Textfield placeholder="Search..." setValue={setSearch} />
      <Button text="Agregar" onClick={handleClick} />
    </div>
  )
}

export default SearchAddField;