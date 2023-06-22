import Label from "components/atoms/Label";
import Select from "components/molecules/Select";
import React, { CSSProperties } from "react";

interface Props {
  count: number;
  setPage: (value: string) => void;
}

const style: CSSProperties = {
  display: "grid",
  justifyContent: "space-between",
  gridTemplateColumns: "auto auto",
  alignItems: "center",
}

const FooterTable: React.FC<Props> = ({count, setPage}) => {
  return (
    <div style={style}>
      <Label text={`${count} Resultados`} />
      <Select name="page" setValue={setPage} />
    </div>
  )
}

export default FooterTable;