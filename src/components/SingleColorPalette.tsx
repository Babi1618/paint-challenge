import * as React from "react";
const SingleColorPalette = ({ color }: SingleColorPaletteType) => {
  return (
    <div className="color-palette" style={{ backgroundColor: color }}></div>
  );
};

export default SingleColorPalette;

type SingleColorPaletteType = {
  color: string;
};
