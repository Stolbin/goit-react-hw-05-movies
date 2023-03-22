import MoviesList from "components/MoviesList";
import { getTrendMovies } from "api/moviesAPI";
import Loader from "components/Loader";
import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getTrendMovies().then(({ results }) => {
      setMovies([...results]);
      setIsLoading(false);
    });
  }, []);
  return (
    <main>
      <h1>Trending today</h1>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
