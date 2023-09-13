import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './routes/Header/Header';
import Accueil from './routes/Accueil/Accueil';
import NotFound from './routes/NotFound/NotFound';
import APropos from './routes/APropos/APropos';
import Logement from './routes/Logement/Logement';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Header />}>
					<Route path="" element={<Accueil />} />
					<Route path="à-propos" element={<APropos />} />
					<Route path="logement/:id" element={<Logement />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
