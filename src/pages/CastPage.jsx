import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../components/Api/Api';
import placeholder from 'img/picture.jpeg';
import css from '../components/MoviesList/Movies.module.css'

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        if (movieId) {
          const castsData = await fetchCastById(movieId);
          setCasts(castsData.cast);
        }
      } catch (error) {
        console.error('Error fetching cast:', error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]); 

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && casts.length > 0 && (
        <div className={css.CstContsiner}>
          {casts.map((cast) => (
            <ul key={cast.id} className={css.cst}>
              <li className={css.cstlist}>
                <img
                  src={
                    cast.profile_path
                    ? `https://image.tmdb.org/t/p/w200/${cast.profile_path}`
                    : placeholder
                  }
                  alt={cast.name}
                  width="250"
                 
                  
                />
                <div>
                  <p className={css.Author}>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}
      {!isLoading && casts.length === 0 && <p>No cast information available</p>}
    </>
  );
};

export default CastPage;
