import React, {useState} from "react";
import {useSearchParams} from "react-router-dom";

import './Countries.css';

import {CountryCard} from "../../components/CountryCard";
import {useCountries} from "../../hooks/useCountries";

const Countries = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchFilter, setSearchFilter] = useState(searchParams.get("search") ?? '');
    const {data, status} = useCountries(searchFilter);

    const handleSearchFilterChange = (e) => {
        setSearchFilter(e.target.value);
        setSearchParams({search: e.target.value});
    };

    return <div className="countries">
        <div className="countries__input-container">
            <label htmlFor="search">Filter:</label>
            <input name="search" type="text" value={searchFilter} onChange={handleSearchFilterChange}/>
        </div>
        {
            status === "loading" || status === "error" ?
                <div><h1>{status === "loading" ? 'Loading...': 'Whoops something went wrong!'}</h1></div>
                :
                <div className="countries__list-container">
                    {
                        data.map(country =>
                            <CountryCard key={country.name} name={country.name} flag={country.flag}/>)
                    }
                </div>
        }
    </div>;
};

export default Countries;