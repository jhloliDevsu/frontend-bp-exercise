import HeaderTable from "components/molecules/HeaderTable";
import Row from "components/molecules/Row";
import { Product } from "models/Product";
import React, { CSSProperties } from "react";

interface Props {
  rows: Product[];
}

const style: CSSProperties = {
  width: "100%",
  backgroundColor: "white",
}

const Table: React.FC<Props> = ({rows}) => {
  return (
    <table style={style}>
      <thead>
        <HeaderTable />
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Row key={`row-${index}`} data={row} />
        ))}
      </tbody>
    </table>
  )
}

export default Table;