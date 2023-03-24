import { getMovieById } from "api/moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notFoundPhotoProfile from "images/noFound/noPhoto.jpg";
import {
  CardImegeBox,
  CastImage,
  CastItem,
  CastList,
  CastName,
  CharactertName,
  Message,
} from "./Cast.styled";
import Loader from "components/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const anApologyMessage =
  "Sorry, but there is currently no information about the cast!";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getMovieById(`${movieId}/credits`)
      .then(({ cast }) => {
        setCast(cast);
        setIsLoading(false);
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId]);
  return (
    <CastList>
      {isLoading && <Loader />}
      {cast?.length > 0 ? (
        cast.map(({ character, credit_id, name, profile_path }) => (
          <CastItem key={credit_id}>
            <CardImegeBox>
              <CastImage
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : `${notFoundPhotoProfile}`
                }
                alt={name}
              />
            </CardImegeBox>
            <CastName>{name}</CastName>
            <CharactertName>{character}</CharactertName>
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
