import { COLORS } from "constants/colors";
import React, { CSSProperties } from "react";

interface Props {
  x: number;
  y: number;
  options: {
    label: string;
    onClick: () => void;
  }[];
}

const style: CSSProperties = {
  position: "fixed",
  backgroundColor: COLORS.secondary,
  borderRadius: "5px",
  color: "white",
}

const ContextMenu: React.FC<Props> = ({x, y, options}) => {
  return (
    <div style={{top: y, left: x, ...style}}>
      {options.map((item) => (
        <div key={item.label} onClick={item.onClick} style={{cursor: "pointer", padding: "10px"}}>
          {item.label}
        </div>
      ))}
    </div>
  )
}

export default ContextMenu;