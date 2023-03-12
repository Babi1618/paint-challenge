import React, { useEffect } from "react";
import my_brand from "../assets/my_brand.png";
import { useGlobalContext } from "../context/GlobalContext";
import CanvasSizeSelect from "./CanvasSizeSelect";

export const Navbar = () => {
  const { heigth, setHeigth, width, setWidth } = useGlobalContext() as {
    heigth: string;
    setHeigth: any;
    width: number;
    setWidth: any;
  };

  useEffect(() => {
    console.log("heigth", heigth);
    console.log("width", width);
  }, [heigth, width]);
  return (
    <div className="navbar">
      <div className="icon">
        <div className="image">
          <img src={my_brand} />
        </div>
        <div>Paint Challenge</div>
      </div>
      <div className="canvas-size">
        <div>
          <CanvasSizeSelect type="heigth" value={heigth} onChange={setHeigth} />
        </div>
        <div>
          <CanvasSizeSelect type="width" value={width} onChange={setWidth} />
        </div>
      </div>
      <div className="reset">
        <button>Reset</button>
      </div>
    </div>
  );
};
