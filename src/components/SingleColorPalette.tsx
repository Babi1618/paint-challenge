import * as React from "react";
const SingleColorPalette = ({
  color,
  setColorSelected,
}: SingleColorPaletteType) => {
  return (
    <div
      className="color-palette"
      style={{ backgroundColor: color }}
      onClick={() => setColorSelected(color)}
    ></div>
  );
};

export default SingleColorPalette;

type SingleColorPaletteType = {
  color: string;
  setColorSelected: any;
};
