import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({ animal }) => {
  return (
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
                animal.photos[0]?.medium || 'https://i.imgur.com/aEcJUFK.png'
              }
              alt=""
            />
          }
        </div>
        <h3>{animal.name}</h3>
        {animal.breeds.primary && <p><strong>Breed:</strong> <em>{animal.breeds.primary}</em></p>}
        {animal.colors.primary && <p><strong>Color:</strong> <em>{animal.colors.primary}</em></p>}
        {animal.gender && <p><strong>Gender:</strong> <em>{animal.gender}</em></p>}
      </article>
    </Link>
  );
};

export default Pet;
