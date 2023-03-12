import * as React from "react";
const CanvasSize = ({ type, value, onChange }: any) => {
  const handleChange = (e: string) => {
    onChange(Number(e));
  };
  return (
    <div>
      <label>{type}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default CanvasSize;
