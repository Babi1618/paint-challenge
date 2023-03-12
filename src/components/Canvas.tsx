import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SingleSquare = ({ isClicked }: any) => {
  const [isClicked2, setIsClicked2] = useState(false);
  return (
    <div
      className={`square ${isClicked2 && "clicked"}`}
      onMouseDown={() => setIsClicked2((prev) => !prev)}
    ></div>
  );
};

const SingleLine = () => {
  const numberOfColumn = 4;
  const { width } = useGlobalContext() as {
    width: number;
  };

  return (
    <div className="canvas">
      <div
        className="single-line"
        style={{
          gridTemplateColumns: `repeat(${width}, 30px)`,
        }}
      >
        {[...Array(width)].map((_, i: number) => {
          return <SingleSquare key={i} isClicked={true} />;
        })}
      </div>
    </div>
  );
};

const Canvas = () => {
  const numerOfLines = 6;
  const { heigth } = useGlobalContext() as {
    heigth: number;
  };
  return (
    <div>
      <div className="content">
        {[...Array(heigth)].map((_, i: number) => {
          return <SingleLine key={i} />;
        })}
      </div>
    </div>
  );
};
export default Canvas;
