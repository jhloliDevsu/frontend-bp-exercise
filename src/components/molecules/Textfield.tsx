import Label from "components/atoms/Label";
import { COLORS } from "constants/colors";
import React, { CSSProperties } from "react";

interface Props {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  setValue?: (value: string) => void;
  value?: string;
}

const style: CSSProperties = {
  padding: "12px 20px",
  borderRadius: "5px",
}

const Textfield: React.FC<Props> = ({label, disabled, error, placeholder, setValue, value}) => {
  const handleChange = (value: string) => {
    if (setValue) {
      setValue(value);
    }
  }
  return (
    <div style={{display: "grid"}}>
      {label && <Label text={label} />}
      <input
        style={{...style, marginTop: label ? "10px" : "0px", borderColor: error ? COLORS.error : ""}}
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => handleChange(e.target.value)}
        value={value}
      />
      {error && <Label text={error} color={COLORS.error} />}
    </div>
  )
}

export default Textfield;