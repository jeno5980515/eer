import React from 'react';
import '../App.css';


const Link = ({ linkData }) => {
	const [p1, p2] = linkData;
	const left = p1.x,
		top = p1.y,
		width = Math.abs(p1.x - p2.x),
		height = Math.abs(p1.y - p2.y);
		
	return (
		<svg width={500+'px'} height={500+'px'}>
			<path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"></path>
		</svg>
	)
}

export default Link;