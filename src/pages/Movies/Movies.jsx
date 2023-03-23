import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { getMovieByName } from "api/moviesAPI";
import { ToastContainer, toast } from "react-toastify";
import SearchBar from "components/SearchBar/SearchBar";
import {
  Container,
  MoviesCard,
  CardImage,
  CardName,
} from "components/MoviesList/MoviesList.styled";
import notFoundPoster from "images/noFound/noImage.png";
import "react-toastify/dist/ReactToastify.css";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getMovieByName(movieName)
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieName]);

  const handleFormSubmit = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
    setMovies([]);
  };

  return (
    <main>
      <SearchBar onSubmit={handleFormSubmit} />
      <Container>
        {movies.map(({ id, original_title, poster_path }) => (
          <MoviesCard key={id}>
            <Link state={{ from: location }} to={`${id}`}>
              <CardImage
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w342/${poster_path}`
                    : `${notFoundPoster}`
                }
                alt={original_title}
              />
              <CardName>{original_title}</CardName>
            </Link>
          </MoviesCard>
        ))}
        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
      <ToastContainer />
    </main>
  );
};

export default Movies;
