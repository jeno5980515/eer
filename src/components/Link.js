import React from 'react';
import '../App.css';


const Link = ({ linkData }) => {
	const [p1, p2] = linkData;
	const left = p1.x,
		top = p1.y,
		width = Math.abs(p1.x - p2.x),
		height = Math.abs(p1.y - p2.y);

	return (
		<div className='link' style={{ left, top, width, height }}>
		</div>
	)
}

export default Link;