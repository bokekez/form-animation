import React, { useState } from 'react';
import '../componentStyles/LineGraph.css';

const Graph = () => {
  const [numbers, setNumbers] = useState([
    {x: 25, y: 25},
    {x: 50, y: 40},
    {x: 75, y: 60},
    {x: 100, y: 80},
    {x: 125, y: 30},
    {x: 150, y: 50},
    {x: 175, y: 70},
    {x: 200, y: 90}
  ]); 
  const svgWidth = 500; 
  const svgHeight = 300; 
  const maxValue = Math.max(...numbers.map(el => el.x));

  const handleChange = (e) => {
    const value = e.target.value.split(',').map(num => parseInt(num.trim(), 10)); 
    setNumbers(value);
  };

  const createPoints = () => {
    const padding = 20;
    // const step = (svgWidth - padding * 2) / numbers.length; 

    return numbers
      .map((num, index) => {
        const x = num.x;
        const y = svgHeight - (num.y / maxValue) * (svgHeight - padding * 2);
        return `${x},${y}`;
      })
      .join(' ');
  };

  return (
    <div className="line-graph-container">
      <h1>Line Graph</h1>
      <svg className="line-graph" viewBox="0 0 500 300">

        <polyline
          fill="none"
          stroke="#4CAF50"
          strokeWidth="3"
          points={createPoints()} 
        />
        {numbers.map((num, index) => {
          const padding = 16;
          const y = svgHeight - (num.y / maxValue) * (svgHeight - padding * 2);
          return (
            <g key={index} transform={`translate(0, ${y})`}>
            <polygon key={index} points="0,0 4,2 0,4"></polygon>
            <text x="5" y="10" fontSize="6" textAnchor="middle" fill="black">
              {num.y}
            </text>
            </g>  
            );
        })}
        {numbers.map((num, index) => {
          const padding = 20;
          // const step = (svgWidth - padding * 2) / numbers.length;
          const x =  num.x;
          return (
            <g key={index} transform={`translate(${x}, 296)`}>
            <polygon key={index} points="2,0 4,4 0,4"></polygon>
            <text x="-5" y="3" fontSize="6" textAnchor="middle" fill="black">
              {num.x}
            </text>
            </g>  
            );
        })}
        {numbers.map((num, index) => {
          const padding = 20;
          // const step = (svgWidth - padding * 2) / numbers.length; 
          
          const x = num.x;
          const y = svgHeight - (num.y / maxValue) * (svgHeight - padding * 2);
          return <circle key={index} cx={x} cy={y} r="5" fill="#FF5722" />;
        })}
      </svg>

      <div className="input-container">
        <label>Enter numbers (comma separated):</label>
        <input type="text" onChange={handleChange} placeholder="e.g., 25, 40, 60, 80, 30" />
      </div>
    </div>
  );
};

export default Graph;
