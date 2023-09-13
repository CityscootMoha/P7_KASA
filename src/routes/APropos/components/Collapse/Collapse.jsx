import { useState } from 'react';
import './Collapse.scss';

/* eslint-disable react/prop-types */
const Collapse = (props) => {
	const [showContent, setShowContent] = useState(false);

	return (
		<div className="collapse">
			<div className="title" onClick={() => setShowContent(!showContent)}>
				<p>{props.title}</p>
				{showContent ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
			</div>
			<div className={showContent ? 'content' : 'hideContent'}>{props.content}</div>
		</div>
	);
};

export default Collapse;
