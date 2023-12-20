import "./App.css";
import MovieList from "./data/movies";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <MovieList />
      </section>
    </div>
  );
}

export default App;
