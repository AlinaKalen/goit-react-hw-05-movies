
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../components/Api/Api';

  const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await fetchReviewsById(movieId);
        setReviews(reviewsData);
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
            <li>
              <p>Author: {rev.author}</p>
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
