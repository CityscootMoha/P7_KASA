import Navbar from './components/Navbar/Navbar';
import Logo from './components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<>
			<div className="divHeader">
				<Logo color={'#FF6060'} />
				<Navbar />
			</div>
			<Outlet />
			<div className="footer">
				<Logo color={'#FFFFFF'} />
				<p>© 2020 Kasa. All rights reserved</p>
			</div>
		</>
	);
}

export default Header;
