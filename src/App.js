import { useState, useEffect } from 'react';
import './App.css';
import getPage from './api/content'
import MovieList from './components/Movie/MovieList';
import SelectedMovies from './components/SelectedMovies/SelectedMovies';

function App() {
	const [data, setData] = useState([]);
	const [selectedMovies, setSelectedMovies] = useState([]);

	useEffect(() => {
		const fetchedData = async () => {
			const result = await getPage();
			setData(result.blocks);
		};
		fetchedData();
	}, []);

	return (
		<div className="App">
			<h1>Are these similar?</h1>
			{selectedMovies.length !== 2 && <h3>Select two movies below to see their similarities</h3>}
			<SelectedMovies selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
			<MovieList data={data} selectedMovies={selectedMovies} setSelectedMovies={setSelectedMovies} />
		</div>
	);
}

export default App;
