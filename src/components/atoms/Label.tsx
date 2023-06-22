import React, { CSSProperties } from "react";

interface Props {
  text: string;
  fontSize?: string;
  color?: string;
}

const style: CSSProperties = {
  fontWeight: "bold",
}

const Label: React.FC<Props> = ({text, fontSize, color}) => {
  return (
    <label style={{...style, fontSize, color}}>
      {text}
    </label>
  )
}

export default Label;