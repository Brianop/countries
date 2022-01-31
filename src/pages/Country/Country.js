import React from 'react';
import {useParams} from "react-router-dom";

import './Country.css';

import {useCountry} from "../../hooks/useCountry";

const Country = () => {
    const {country} = useParams();
    const {data, status} = useCountry(country);

    if (status === "loading") {
        return <div><h1>Loading...</h1></div>;
    }

    if (status === "error") {
        return <div><h1>Whoops something went wrong!</h1></div>;
    }

    return <div className="country">
        <div className="country-card">
            <img className="country-card__img" src={data.flags.svg} alt={`${country} flag`}/>
            <h1>{data.name.common}</h1>
            <div><span>Region:</span> <span>{data?.region ?? ''}</span></div>
            <div><span>Capital:</span> <span>{data?.capital?.[0] ?? ''}</span></div>
            <div><span>Population:</span> <span>{data?.population ?? 0}</span></div>
        </div>
    </div>;
};

export default Country;