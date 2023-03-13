import React from "react";
const CanvaSizeSelect = ({ type, value, onChange }: CanvaSizeSelectType) => {
  const handleChange = (e: string) => {
    const value = Number(e);
    onChange(value);
  };
  return (
    <div className="canva-size-select">
      <label>{type}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default CanvaSizeSelect;

type CanvaSizeSelectType = {
  type: string;
  value: string | number;
  onChange: any;
};
