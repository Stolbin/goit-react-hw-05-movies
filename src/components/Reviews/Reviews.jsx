import { getMovieById } from "api/moviesAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Message } from "components/Cast/Cast.styled";
import Loader from "components/Loader";
import { ToastContainer, toast } from "react-toastify";
import { ReviewsList, ContentText, ReviewsListItem } from "./Reviews.styled";
import "react-toastify/dist/ReactToastify.css";

const anApologyMessage = "Sorry, but there are currently no reviews!";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getMovieById(`${movieId}/reviews`)
      .then(({ results }) => {
        setReviews(results);
        setIsLoading(false);
      })
      .catch(() =>
        toast.error(`Whoops, something went wrong! Please try again later!`)
      );
  }, [movieId]);
  return (
    <ReviewsList>
      {isLoading && <Loader />}
      {reviews?.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <ReviewsListItem key={id}>
            <h3>{author}</h3>
            <ContentText>{content}</ContentText>
          </ReviewsListItem>
        ))
      ) : (
        <Message>{anApologyMessage}</Message>
      )}
      <ToastContainer />
    </ReviewsList>
  );
};

export default Reviews;
