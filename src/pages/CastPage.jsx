import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../components/Api/Api';

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCast = async () => {
      try {
        const castsData = await fetchCastById(movieId);
        setCasts(castsData.cast);
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
        <>
          {casts.map((cast) => (
            <ul key={cast.id}>
              <li className="">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`}
                  alt={cast.name}
                  width="70"
                  height="100"
                />
                <div style={{ marginLeft: 15 }}>
                  <p>Name: {cast.name}</p>
                  <p>Character: {cast.character}</p>
                </div>
              </li>
            </ul>
          ))}
        </>
      )}
      {!isLoading && casts.length === 0 && <p>No cast information available</p>}
    </>
  );
};

export default CastPage;
