import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../data.json';
import NotFound from '../NotFound/NotFound';
import Carrousel from './components/Carrousel/Carrousel';
import Collapse2 from './components/Collapse2/Collapse2';
import './Logement.scss';

const Logement = () => {
	const { id } = useParams();

	const [logement, setLogement] = useState(null);

	useEffect(() => {
		const findLogement = jsonData.find((element) => element.id === id);

		if (findLogement) {
			setLogement(findLogement);
		} else {
			setLogement(404);
		}
	}, []);

	return logement && logement !== 404 ? (
		<div className="logement">
			<Carrousel images={logement.pictures} />
			<div className="infoTop">
				<div className="infoTopLeft">
					<h4>{logement.title}</h4>
					<p>{logement.location}</p>
					<div className="tags">
						{logement.tags.map((tag, index) => (
							<p className="tag" key={index}>
								{tag}
							</p>
						))}
					</div>
				</div>
				<div className="infoTopRight">
					<div className="host">
						<p>{logement.host.name}</p>
						<img src={logement.host.picture}></img>
					</div>
					<div className="stars">
						{Array.from({ length: 5 }, (_, index) => (
							<span key={index} className={`material-symbols-rounded ${index < Number(logement.rating) ? 'starRed' : 'starGrey'}`}>
								star
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="collapses">
				<Collapse2 title={'Description'} content={logement.description} />
				<Collapse2 title={'Èquipements'} content={logement.equipments} />
			</div>
		</div>
	) : logement === 404 ? (
		<NotFound />
	) : (
		<p style={{ textAlign: 'center' }}>Chargement de la page</p>
	);
};

export default Logement;
