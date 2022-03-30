import React from 'react';
//import { useState } from 'react';
//import { getPetTypes } from '../../api/petfinder';
import Logo from '../../assets/logo.svg';
import Search from '../search';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  /* const [petTypes, setPetTypes] = useState([]);

  const getPetTypesData = async () => {
    const { types } = await getPetTypes();
    setPetTypes(types);
  };

  React.useEffect(() => {
    getPetTypesData();
  }, []); */

  return (
    <nav>
      <div className="nav-logo">
        <img src={Logo} alt="Petlover" />
        <Search />
      </div>
      <ul className="nav-links">
        <li key="all">
          <NavLink
            to="/"
            className="nav-link"
            exact
            activeClassName={"nav-link-active"}
          >
            All Pets
          </NavLink>
        </li>
        <li key="Dog">
          <NavLink
              to="/dog"
              activeClassName={"nav-link-active"}
              key="Dog"
              className="nav-link"
          >
            Dogs
          </NavLink>{' '}
        </li>
        <li key="Cat">
          <NavLink
              to="/cat"
              activeClassName={"nav-link-active"}
              key="Cat"
              className="nav-link"
          >
            Cats
          </NavLink>{' '}
        </li>
        <li key="Rabbit">
          <NavLink
              to="/rabbit"
              activeClassName={"nav-link-active"}
              key="Rabbit"
              className="nav-link"
          >
            Rabbits
          </NavLink>{' '}
        </li>
        <li key="Bird">
          <NavLink
              to="/bird"
              activeClassName={"nav-link-active"}
              key="Bird"
              className="nav-link"
          >
            Birds
          </NavLink>{' '}
        </li>
        {/* This code creates <li> elements based on the contents of the 'petTypes' array; I decided to create them manually in order to test the UI more easily:
        {petTypes
          ? petTypes.map((type) => (
              <li key={type.name}>
                <NavLink
                  to={`/${type._links.self.href.split('/').pop()}`}
                  activeClassName={"nav-link-active"}
                  key={type.name}
                  className="nav-link"
                >
                  {type.name}s
                </NavLink>{' '}
              </li>
            ))
          : 'Loading...'} */}
      </ul>
    </nav>
  );
};

export default Navigation;
