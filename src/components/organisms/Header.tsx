import React, { CSSProperties } from "react";

interface Props {
  backgroundColor?: string;
}

const style: CSSProperties = {
  width: "100%",
  display: "grid",
  justifyContent: "center",
  padding: "15px 0px",
}

const Header: React.FC<Props> = ({backgroundColor = "white"}) => {
  return (
    <div style={{...style, backgroundColor}}>
      <img src="/images/logo-bp.svg" alt="logo-pichincha" width={200} height={42.03} />
    </div>
  )
}

export default Header;