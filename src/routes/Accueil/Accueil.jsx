import './Accueil.scss';
import Banner from './components/Banner/Banner';
import jsonData from '../../data.json';
import Card from './components/Card/Card';

const Accueil = () => {
	return (
		<div className="accueil">
			<Banner />
			<div className="locations">
				{jsonData.map((item) => (
					<div class="hehe" key={item.id}>
						<Card item={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Accueil;
