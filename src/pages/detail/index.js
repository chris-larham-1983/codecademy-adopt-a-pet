import React, { useEffect, useState } from 'react';
import { getPetDetails } from '../../api/petfinder';
import Hero from '../../components/hero';
import { useParams, Redirect } from 'react-router-dom';
//import Pet from "../../components/pet";

const PetDetailsPage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function getPetsData() {
      try {
        const petsData = await getPetDetails(id);
        setData(petsData);
        setError(false);
      } catch (e) {
        setError(true);
      }
      setLoading(false);
    }

    getPetsData();
  }, [id]);

  const addDefaultSrc = (event) => {
    event.target.src = "https://sharedsapience.info/wp-content/uploads/2022/03/adopt-a-pet-fallback.png";
  };

  return (
    <div>
      {loading ? (
        <h3>Loading...</h3>
      ) : error ? (
        <div>
          <Redirect to={'/pet-details-not-found'} />
        </div>
      ) : (
        <main>
          <Hero
            image={data.photos[0].large || 'https://i.imgur.com/aEcJUFK.png'}
            displayText={`Meet ${data.name.toLowerCase()}`}
          />
          <div className="horizontal-adoptee-photos">
            {data.photos.map((photo) =>
                (
                    <div className="pet-detail" key={photo.medium}>
                      <div className="detail-pet-image-container">
                        <img
                            className="pet-image"
                            src={
                              photo.medium
                            }
                            onError={addDefaultSrc}
                            alt=""
                        />
                      </div>
                    </div>
                )
            )}
          </div>
            <div className='adoptee-info'>
              <h1 className="animal-to-adopt-info">{data.name.toLowerCase()}</h1>
              <h2>Information:</h2>
              {data.breeds.primary && <p><strong>Breed:</strong> <em>{data.breeds.primary}</em></p>}
              {data.colors.primary && <p><strong>Color:</strong> <em>{data.colors.primary || 'Unknown'}</em></p>}
              {data.gender && <p><strong>Gender:</strong> <em>{data.gender}</em></p>}
              {data.description && <h3>Description</h3>}
              {data.description && <p>{data.description}</p>}
            </div>
        </main>
      )}
    </div>
  );
};

export default PetDetailsPage;
