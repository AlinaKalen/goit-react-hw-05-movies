
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../components/Api/Api';
import css from '../components/MoviesList/Movies.module.css'

  const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchReviewsById(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        console.error('Error fetching reviews:', error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <>
      {!!reviews.length ? (
        reviews.map((rev) => (
          <ul key={rev.id}>
            <li className={css.ReviewList}>
              <p className={css.Author}>Author: {rev.author}</p>
              <p>Content: {rev.content}</p>
            </li>
          </ul>
        ))
      ) : (
        <p>Sorry, we couldn't find any reviews</p>
      )}
    </>
  );
};

export default ReviewPage;
