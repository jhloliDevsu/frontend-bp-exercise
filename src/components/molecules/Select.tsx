import { LIMITS } from "constants/limits";
import React, { CSSProperties } from "react";

interface Props {
  label?: string;
  name: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  setValue: (value: string) => void;
}

const style: CSSProperties = {
  padding: "12px 20px",
  width: "100%",
  borderRadius: "5px",
  cursor: "pointer",
}

const Select: React.FC<Props> = ({name, setValue}) => {
  return (
    <div style={{display: "grid"}}>
      <select style={style} name={name} onChange={(e) => setValue(e.target.value)}>
        {LIMITS.map((page) => (
          <option key={page} value={page}>{page}</option>
        ))}
      </select>
    </div>
  )
}

export default Select;