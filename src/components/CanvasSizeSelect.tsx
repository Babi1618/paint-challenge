import * as React from "react";
const CanvaSizeSelect = ({ type, value, onChange }: any) => {
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
