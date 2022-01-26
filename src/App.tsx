import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css'
import NavBar from './components/navbar/NavBar';
import Posts from './pages/Posts';
import Todos from './pages/Todos';
import NotFound from './pages/NotFound';



function App() {
	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/posts" element={<Posts />} />
				<Route path="/todos" element={<Todos />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	)
}

export default App;
