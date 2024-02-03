import styles from './App.module.css';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import Footer from '../components/Footer/Footer';

function App() {
  return (
	<div className={styles.app}>
		<Header />
		<SearchBar />
		<div className={styles.listContainer}>
			<SearchResults />
			<Playlist />
		</div>
		<Footer />
	</div>
  );
}

export default App;
