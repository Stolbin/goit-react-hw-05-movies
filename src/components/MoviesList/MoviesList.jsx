import { Link, useLocation } from "react-router-dom";
import {
  Container,
  MoviesCard,
  CardImage,
  CardName,
} from "./MoviesList.styled";
import notFoundPoster from "images/noFound/noImage.png";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ id, original_title, poster_path }) => (
        <MoviesCard key={id}>
          <Link state={{ from: location }} to={`movies/${id}`}>
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
    </Container>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
