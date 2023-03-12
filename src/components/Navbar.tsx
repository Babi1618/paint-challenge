import React from "react";
import my_brand from "../assets/my_brand.png";
import CanvasSize from "./CanvasSize";

export const Navbar = () => {
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
          <CanvasSize type="heigth" />
        </div>
        <div>
          <CanvasSize type="width" />
        </div>
      </div>
      <div className="reset">
        <button>Reset</button>
      </div>
    </div>
  );
};
