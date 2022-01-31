import React from 'react';
import {Link} from "react-router-dom";

import './CountryCard.css';

const CountryCard = ({name, flag}) =>
    <div className="country-list-card">
        <Link to={`/country/${name}`}>
            <img className="country-list-card__img" src={flag} alt={`${name} flag`}/>
            <span className="country-list-card__name">{name}</span>
        </Link>
    </div>;

export default CountryCard;