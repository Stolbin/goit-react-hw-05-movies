import { generatePath, useLocation, useParams, Outlet } from "react-router-dom";
import {
  MoviesCard,
  BtnGoBack,
  MoviesDetailsInfo,
  GenresTitle,
  CardImage,
  CardInfo,
  MoviesDetailsInfoItem,
  MoviesDetailsLink,
  MoviesDetailsInfoText,
  Icon,
} from "./MoviesDetails.styled";
import { getMovieById } from "api/moviesAPI";
import Loader from "components/Loader";
import { useState, Suspense, useEffect } from "react";
import notFoundImage from "images/noFound/noImage.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const goBack = location?.state?.from ?? "/";

  useEffect(() => {
    setIsLoading(true);
    getMovieById(movieId)
      .then((movie) => {
        setMovie(movie);
        setIsLoading(false);
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId]);

  if (!movie) return;
  const {
    id,
    poster_path,
    title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;

  return (
    <main>
      {isLoading && <Loader />}
      <BtnGoBack to={goBack}>
        <Icon />
      </BtnGoBack>
      <MoviesCard key={id}>
        <CardImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : `${notFoundImage}`
          }
          alt={title}
        />
        <CardInfo>
          <h2>
            {title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User scores: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresTitle>
            {genres?.map((genre) => genre.name).join(", ")}
          </GenresTitle>
        </CardInfo>
      </MoviesCard>
      <MoviesDetailsInfo>
        <MoviesDetailsInfoText>Additional information</MoviesDetailsInfoText>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ from: location?.state?.from }}
            to={generatePath("cast", { id })}
          >
            - Cast
          </MoviesDetailsLink>
        </MoviesDetailsInfoItem>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ from: location?.state?.from }}
            to={generatePath("reviews", { id })}
          >
            - Reviews
          </MoviesDetailsLink>
        </MoviesDetailsInfoItem>
      </MoviesDetailsInfo>
      <Suspense>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </main>
  );
};
export default MoviesDetails;
