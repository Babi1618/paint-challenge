import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SingleSquare = ({ mouseDown }: any) => {
  const [isClicked2, setIsClicked2] = useState(false);

  const handleColor = () => {
    if (mouseDown) {
      setIsClicked2(true);
    }
  };
  return (
    <div
      className={`square ${isClicked2 && "clicked"}`}
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
  useEffect(() => {
    console.log("over", mouseDown);
  }, [mouseDown]);

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
