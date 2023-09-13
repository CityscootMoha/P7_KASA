/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
	return (
		<Link to={`/logement/${props.item.id}`}>
			<div className="card">
				<img src={props.item.pictures[0]} />
				<p>{props.item.title}</p>
			</div>
		</Link>
	);
};

export default Card;
