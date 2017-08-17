import React from 'react';
import '../App.css';


const Link = ({ linkData, tableInfo }) => {
  const [p1, p2] = linkData;
  const { width, height } = tableInfo;
  
  const x1 = p1.x + width;
  const y1 = p1.y;
  
  const x2 = p2.x;
  const y2 = p2.y;

  return (
    <svg width={500+'px'} height={500+'px'}>
      <path d={`M ${x1} ${y1} L ${x2} ${y2}`} stroke="black" fill="transparent"></path>
    </svg>
  )
}

export default Link;