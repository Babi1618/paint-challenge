import * as React from "react";
import SingleColorPalette from "./SingleColorPalette";

const Palette = () => {
  const colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#3366E6",
    "#99FF99",
    "#80B300",
    "#E6B3B3",
    "#6680B3",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#CC80CC",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];
  return (
    <div className="palette">
      <div className="content">
        {
            colorArray.map((el:any ,i:number)=><SingleColorPalette key={i} color={el}/>)
        }

      </div>
    </div>
  );
};

export default Palette;
