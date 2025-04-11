import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "./App.css";
import Mondrian from "./Mondrian";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    generateData();
  }, []);

  const generateData = () => {
    var randomNum = () => Math.ceil(Math.random() * 10);
    var level0 = Array.from(Array(randomNum()));

    const treemap = data =>
      d3
        .treemap()
        // .tile(d3.treemapBinary)
        .size([width, height])
        .padding(1)
        .round(true)(
        d3
          .hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value)
      );

    const data = {
      children: level0.map(d => {
        return {
          children: Array.from(Array(randomNum())).map(n => ({
            value: 50
          }))
        };
      })
    };

    setData(treemap(data));
  };

  var width = 800;
  var height = 600;

  return (
    <div className="App">
      <header>
        <h1>Mondrian art generator</h1>
        <button onClick={() => generateData()}>Click to generate</button>
      </header>

      <svg width={width} height={height} style={{ margin: "0 auto" }}>
        <Mondrian data={data} />
      </svg>
    </div>
  );
}

export default App;
