import { useState } from 'react';
import './Collapse2.scss';

/* eslint-disable react/prop-types */
const Collapse2 = (props) => {
	const [showContent, setShowContent] = useState(false);

	return (
		<div className="collapse2">
			<div className="title" onClick={() => setShowContent(!showContent)}>
				<p>{props.title}</p>
				{showContent ? <span className="material-symbols-outlined">expand_less</span> : <span className="material-symbols-outlined">expand_more</span>}
			</div>
			<div className={showContent ? 'content' : 'hideContent'}>{Array.isArray(props.content) ? props.content.map((element, index) => <p key={index}>{element}</p>) : props.content}</div>
		</div>
	);
};

export default Collapse2;
