import * as React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { colorsArray } from "../utils/colorsArray";
import SingleColorPalette from "./SingleColorPalette";

const Palette = () => {
  const { colorSelected, setColorSelected } = useGlobalContext() as {
    colorSelected: string;
    setColorSelected: any;
  };

  React.useEffect(() => {
    setColorSelected("black");
  }, []);
  React.useEffect(() => {
    console.log(colorSelected);
  }, [colorSelected]);

  return (
    <div className="palette">
      <div className="content">
        {colorsArray.map((el: string, i: number) => (
          <SingleColorPalette
            key={i}
            color={el}
            setColorSelected={setColorSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
