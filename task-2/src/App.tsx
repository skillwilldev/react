import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Trending Movies</h1>
        <MovieList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
