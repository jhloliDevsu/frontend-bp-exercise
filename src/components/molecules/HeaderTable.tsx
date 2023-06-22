import { COLORS } from "constants/colors";
import { COLUMNS } from "constants/columns";
import React, { CSSProperties } from "react";

const style: CSSProperties = {
  backgroundColor: COLORS.gray,
  padding: "10px 0px",
  border: "0px",
}

const HeaderTable: React.FC = () => {
  return (
    <tr>
      {COLUMNS.map((column, index) => (
        <th key={`column-${index}`} style={style}>
          <span>{column}</span>
          {[2, 3, 4].includes(index) && <img src="/images/information.png" width={16} style={{marginLeft: "10px"}} />}
        </th>
      ))}
      <th style={style}/>
    </tr>
  )
}

export default HeaderTable;