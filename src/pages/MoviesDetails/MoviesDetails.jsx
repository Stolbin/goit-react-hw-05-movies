import { generatePath, useLocation, useParams, Outlet } from "react-router-dom";
import {
  MoviesCard,
  BtnGoBack,
  MoviesDetailsInfo,
  CardImage,
  CardInfo,
  MoviesDetailsInfoItem,
  MoviesDetailsLink,
  MoviesDetailsInfoText,
} from "./MoviesDetails.styled";
import { getMovieById } from "api/moviesAPI";
import { useEffect, useState, Suspense } from "react";
import notFoundImage from "images/noFound/noImage.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesDetails = () => {
  const { movieId } = useParams();
  const { movie, setMovie } = useState({});
  const location = useLocation();
  const goBack = location?.state?.from ?? "/";

  const {
    id,
    poster_path,
    original_title,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;

  useEffect(() => {
    getMovieById(movieId)
      .then(
        ({
          id,
          poster_path,
          original_title,
          overview,
          release_date,
          vote_average,
          genres,
        }) => {
          setMovie({
            id,
            poster_path,
            original_title,
            overview,
            release_date,
            vote_average,
            genres,
          });
        }
      )
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId, setMovie]);

  return (
    <main>
      <BtnGoBack to={goBack}>Go back</BtnGoBack>
      <MoviesCard>
        <CardImage
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w342/${poster_path}`
              : `${notFoundImage}`
          }
          alt={original_title}
        />
        <CardInfo>
          <h2>
            {original_title} ({new Date(release_date).getFullYear()})
          </h2>
          <p>User scores: {Math.ceil(vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres?.map((genre) => genre.name).join(", ")}</p>
        </CardInfo>
      </MoviesCard>
      <MoviesDetailsInfo>
        <MoviesDetailsInfoText>Additional information</MoviesDetailsInfoText>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ from: location?.state?.from }}
            to={generatePath("cast", { id })}
          >
            Cast
          </MoviesDetailsLink>
        </MoviesDetailsInfoItem>
        <MoviesDetailsInfoItem>
          <MoviesDetailsLink
            state={{ from: location?.state?.from }}
            to={generatePath("reviews", { id })}
          >
            Reviews
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
