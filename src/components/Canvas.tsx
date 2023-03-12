import * as React from "react";

const SingleSquare = () => {
  return <div className="square"></div>;
};

const SingleLine = () => {
  const numberOfColumn = 4;

  return (
    <div className="canvas">
      <div
        className="single-line"
        style={{
          gridTemplateColumns: `repeat(${numberOfColumn}, 30px)`,
        }}
      >
        {[...Array(numberOfColumn)].map((el: any, i: number) => {
          return <SingleSquare key={i} />;
        })}
      </div>
    </div>
  );
};

const Canvas = () => {
  const numerOfLines = 6;
  return (
    <div>
      <div className="content">
        {[...Array(numerOfLines)].map((el: any, i: number) => {
          return <SingleLine key={i} />;
        })}
      </div>
    </div>
  );
};
export default Canvas;
