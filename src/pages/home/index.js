import React, { useEffect, useState } from 'react';
import { getPets } from '../../api/petfinder';
import Hero from '../../components/hero';
//import Pet from '../../components/pet';
import { useParams, Link } from 'react-router-dom';

const HomePage = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();

  useEffect(() => {
    async function getPetsData() {
      const petsData = await getPets(type);
      setData(petsData);
    }

    getPetsData();
  }, [type]);

  if (!data) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="page">
      <Hero />
      <h3>
        <span className="pet-type-label">{type ? `${type}s` : 'Pets'}</span>{' '}
        available for adoption near you
      </h3>

      {data.length ? (
        <div className="grid">
          {data.map((animal) => (
            <Link
              key={animal.id}
              to={`/${animal.type.toLowerCase()}/${animal.id}`}
              className="pet"
            >
              <article>
                <div className="pet-image-container">
                  {
                    <img
                      className="pet-image"
                      src={
                        animal.photos[0]?.medium ||
                        '/missing-animal.png'
                      }
                      alt=""
                    />
                  }
                </div>
                <h3>{animal.name.toLowerCase()}</h3>
                {animal.breeds.primary && <p><strong>Breed:</strong> <em>{animal.breeds.primary}</em></p>}
                {animal.colors.primary && <p><strong>Color:</strong> <em>{animal.colors.primary}</em></p>}
                {animal.gender && <p><strong>Gender:</strong> <em>{animal.gender}</em></p>}
              </article>
            </Link>
          ))}
        </div>
      ) : (
          <>
            <p className="prompt">No {type}s available for adoption now.</p>
            <div className="pet-image-container" style={{marginLeft: "auto", marginRight: "auto"}}>
              <img
                className="pet-image"
                src="https://sharedsapience.info/wp-content/uploads/2022/03/adopt-a-pet-fallback.png"
                alt="'Adopt a Pet' placeholder"
              />
            </div>
          </>
      )}
    </div>
  );
};

export default HomePage;
