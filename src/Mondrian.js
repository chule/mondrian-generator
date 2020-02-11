import React from "react";

const Mondrian = ({ data }) => {
  const randomColor = () => {
    const red = "#C31D24";
    const blue = "#2D4070";
    const yellow = "#FBCA0E";
    const white = "#FFFFFF";
    const black = "#000000";

    const colorArr = [
      red,
      blue,
      yellow,
      white,
      black,
      white,
      white,
      white,
      white
    ];
    const randInd = Math.floor(Math.random() * colorArr.length);
    return colorArr[randInd];
  };

  const { x0, x1, y0, y1, children } = data;
  return (
    <>
      <rect
        fill={randomColor()}
        x={x0}
        y={y0}
        width={x1 - x0}
        height={y1 - y0}
        stroke="black"
        strokeWidth="10"
      />

      {children &&
        children.map((d, i) => {
          return (
            <Mondrian
              key={i}
              x={x0}
              y={y0}
              width={x1 - x0}
              height={y1 - y0}
              data={d}
            />
          );
        })}
    </>
  );
};

export default Mondrian;
