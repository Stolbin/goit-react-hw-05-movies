import { getMovieById } from "api/moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notFoundPhotoProfile from "images/noFound/noAvatar.png";
import {
  CastImage,
  CastItem,
  CastList,
  CastName,
  Message,
} from "./Cast.styled";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const anApologyMessage =
  "Sorry, but there is currently no information about the cast!";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieById(`${movieId}/credits`)
      .then(({ cast }) => {
        setCast(cast);
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId]);
  return (
    <CastList>
      {cast?.length > 0 ? (
        cast.map(({ character, credit_id, name, profile_path }) => (
          <CastItem key={credit_id}>
            <CastImage
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${notFoundPhotoProfile}`
              }
              alt={name}
            />
            <CastName>
              {name} ({character})
            </CastName>
          </CastItem>
        ))
      ) : (
        <Message>{anApologyMessage}</Message>
      )}
      <ToastContainer />
    </CastList>
  );
};

export default Cast;
