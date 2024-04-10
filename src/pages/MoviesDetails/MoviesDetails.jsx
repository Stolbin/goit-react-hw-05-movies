import { generatePath, useLocation, useParams, Outlet } from "react-router-dom";
import {
  MoviesCard,
  BtnGoBack,
  BtnGoBackText,
  MoviesDetailsInfo,
  BoxRaiting,
  ScoresTitle,
  CircleRating,
  LineRating,
  Raiting,
  GenresTitle,
  CardImage,
  CardInfo,
  MoviesDetailsInfoItem,
  MoviesDetailsLink,
  MoviesDetailsInfoText,
  BtnMovieDetText,
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
        <Icon /> <BtnGoBackText>Go Back</BtnGoBackText>
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
          <BoxRaiting>
            <ScoresTitle>User scores:</ScoresTitle>
            <CircleRating>
              <LineRating>
                <Raiting>{Math.ceil(vote_average * 10)}%</Raiting>
              </LineRating>
            </CircleRating>
          </BoxRaiting>

          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresTitle>
            {genres?.map((genre) => genre.name).join(", ")}
          </GenresTitle>
        </CardInfo>
      </MoviesCard>{" "}
      <MoviesDetailsInfoText>Additional information:</MoviesDetailsInfoText>
      <MoviesDetailsInfo>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ goBack }}
            to={generatePath("cast", { id })}
          >
            <BtnMovieDetText>Cast</BtnMovieDetText>
          </MoviesDetailsLink>
        </MoviesDetailsInfoItem>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ goBack }}
            to={generatePath("reviews", { id })}
          >
            <BtnMovieDetText>Reviews</BtnMovieDetText>
          </MoviesDetailsLink>
        </MoviesDetailsInfoItem>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink to="" state={{ from: goBack }}>
            <BtnMovieDetText>Hide All</BtnMovieDetText>
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
