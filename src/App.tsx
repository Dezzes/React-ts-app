import './App.css'
import NavBar from './components/navbar/NavBar';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { AuthActionCreators } from './store/reducers/action-creators/auth';
import { useDispatch } from 'react-redux';
import IUser from './types/IUser';



function App() {

	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			dispatch(AuthActionCreators.setUser({ username: localStorage.getItem("username" || "") } as IUser))
			dispatch(AuthActionCreators.setIsAuth(true))
		}
	}, [])

	return (
		<>
			<NavBar />
			<AppRouter />
		</>
	)
}

export default App;
