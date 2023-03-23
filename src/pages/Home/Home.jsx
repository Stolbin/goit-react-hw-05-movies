import MoviesList from "components/MoviesList";
import { getTrendMovies } from "api/moviesAPI";
import { useEffect, useState } from "react";
import Loader from "components/Loader";
import { Title } from "./Home.styled";

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
      <Title>Trending today</Title>
      {isLoading && <Loader />}
      <MoviesList movies={movies} />
    </main>
  );
};

export default Home;
