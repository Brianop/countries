import React, {useState} from "react";

import './Countries.css';

import {CountryCard} from "../../components/CountryCard";
import {useCountries} from "../../hooks/useCountries";

const Countries = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const {data, status} = useCountries(searchFilter);

    const handleSearchFilterChange = (e) => {
        setSearchFilter(e.target.value);
    };

    if (status === "loading") {
        return <div><h1>Loading...</h1></div>;
    }

    if (status === "error") {
        return <div><h1>Whoops something went wrong!</h1></div>;
    }

    return <div className="countries">
        <div className="countries__input-container">
            <label htmlFor="search">Filter:</label>
            <input name="search" type="text" value={searchFilter} onChange={handleSearchFilterChange}/>
        </div>
        <div className="countries__list-container">
            {
                data.map(country =>
                    <CountryCard key={country.name} name={country.name} flag={country.flag}/>)
            }
        </div>
    </div>;
};

export default Countries;