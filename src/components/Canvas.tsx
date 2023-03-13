import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const SingleSquare = ({ mouseDown }: any) => {
  const [singleSquareColor, setSingleSquareColor] = useState("");
  const { colorSelected, reset } = useGlobalContext() as any;

  const handleColor = () => {
    if (mouseDown) {
      setSingleSquareColor(colorSelected);
    }
  };
  useEffect(() => {
    console.log(reset);
    if(reset){
      setSingleSquareColor("")
    }
  }, [reset]);

  return (
    <div
      className={`square `}
      style={{ backgroundColor: `${singleSquareColor}` }}
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
  const { height } = useGlobalContext() as {
    height: number;
  };
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <div>
      <div
        className="content"
        onMouseDown={() => setMouseDown(true)}
        onMouseUp={() => setMouseDown(false)}
      >
        {[...Array(height)].map((_, i: number) => {
          return <SingleLine key={i} mouseDown={mouseDown} />;
        })}
      </div>
    </div>
  );
};
export default Canvas;
