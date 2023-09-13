import { Link } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
	return (
		<div className="navBar">
			<Link className="link" to="">
				Accueil
			</Link>
			<Link className="link" to="à-propos">
				A propos
			</Link>
		</div>
	);
}

export default Navbar;
