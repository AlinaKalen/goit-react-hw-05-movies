import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchReviewsById } from '../components/Api/Api'

const ReviewPage = () => {
  const [reviews, setReviews] = useState([])
  const { moviesId } = useParams()

  useEffect(() => {
    const fechReviews = async () => {
      const reviewsData = await fetchReviewsById(moviesId, '/reviews')
      setReviews(reviewsData)
    }
    fechReviews()
  }, [moviesId])

  return (
    <>
      {!!reviews.length 
      ? (reviews)?.map(rev => (
        <ul key={rev.id}>
          <li>
            <p>Author: {rev.author}</p>
            <p>Author: {rev.content}</p>
          </li>
        </ul>
      )) 
      : <p> Sorry, we couldn't find any reviews </p>}
    </>
  )
}

export default ReviewPage