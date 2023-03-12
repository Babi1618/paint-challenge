import React, { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SingleSquare = ({ mouseDown }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  const { colorSelected } = useGlobalContext() as any;

  const handleColor = () => {
    if (mouseDown) {
      setIsClicked(true);
    }
  };
  return (
    <div
      className={`square `}
      style={{ backgroundColor: `${isClicked && colorSelected}` }}
      onMouseOver={() => handleColor()}
    ></div>
  );
};

const SingleLine = ({ mouseDown }: any) => {
  const { width } = useGlobalContext() as {
    width: number;
  };

  return (
    <div className="canvas">
      <div
        className="single-line"
        style={{
          gridTemplateColumns: `repeat(${width}, 10px)`,
        }}
      >
        {[...Array(width)].map((_, i: number) => {
          return <SingleSquare key={i} mouseDown={mouseDown} />;
        })}
      </div>
    </div>
  );
};

const Canvas = () => {
  const { heigth } = useGlobalContext() as {
    heigth: number;
  };
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div>
      <div
        className="content"
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      >
        {[...Array(heigth)].map((_, i: number) => {
          return <SingleLine key={i} mouseDown={mouseDown} />;
        })}
      </div>
    </div>
  );
};
export default Canvas;
