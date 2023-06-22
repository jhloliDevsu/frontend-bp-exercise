import React, { CSSProperties } from "react";

interface Props {
  src: string;
  onClick: () => void;
  width: number;
}

const style: CSSProperties = {
  cursor: "pointer",
}

const IconButton: React.FC<Props> = ({src, onClick, width}) => {
  return (
    <img style={style} src={src} width={width} onClick={onClick} />
  )
}

export default IconButton;