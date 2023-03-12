import * as React from "react";
import { useGlobalContext } from "../context/GlobalContext";
const SingleColorPalette = ({
  color,
  setColorSelected,
}: SingleColorPaletteType) => {
  const { colorSelected } = useGlobalContext() as any;
  return (
    <div className={`${colorSelected === color && "color-palette-selected"}`}>
      <div
        className="color-palette"
        style={{ backgroundColor: color }}
        onClick={() => setColorSelected(color)}
      ></div>
    </div>
  );
};

export default SingleColorPalette;

type SingleColorPaletteType = {
  color: string;
  setColorSelected: any;
};
