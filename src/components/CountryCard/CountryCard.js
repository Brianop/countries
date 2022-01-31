import React from 'react';
import {Link} from "react-router-dom";

import './CountryCard.css';

const CountryCard  = ({name, flag}) => <Link to={`/country/${name}`}> <img className="country-card__img" src={flag} alt={`${name} flag`}/>{name}</Link>;

export default CountryCard;