import { COLORS } from "constants/colors";
import React, { CSSProperties } from "react";

interface Props {
  text: string;
  color?: string;
  disabled?: boolean;
  onClick: () => void;
}

const style: CSSProperties = {
  padding: 12,
  cursor: "pointer",
  background: COLORS.primary,
  borderColor: COLORS.primary,
  borderStyle: "solid",
  fontWeight: "bold",
  borderRadius: "5px"
}

const Button: React.FC<Props> = ({text, color = COLORS.primary, disabled = false, onClick}) => {
  return (
    <button
      style={{
        ...style,
        backgroundColor: color,
        borderColor: color
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;