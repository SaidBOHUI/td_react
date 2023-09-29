import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './core/routes/MainRoutes';
import Header from './core/components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	return (
		<BrowserRouter>
			<Header />
			<MainRoutes />
		</BrowserRouter>
	);
}

export default App;
