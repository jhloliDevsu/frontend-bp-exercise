import React from "react";

interface Props {
  src: string;
  width?: number;
}

const Logo: React.FC<Props> = ({src, width = 50}) => {
  return (
    <img src={src} width={width} alt="logo" style={{borderRadius: "50%"}} />
  )
}

export default Logo;