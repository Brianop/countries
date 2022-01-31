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
        return <div> loading</div>;
    }

    if (status === "error") {
        return <div> error</div>
    }

    return (
        <div>
            <input type="text" value={searchFilter} onChange={handleSearchFilterChange}/>
            <div className="countries">
                {
                    data.map(country =>
                        <CountryCard key={country.name} name={country.name} flag={country.flag}/>)
                }
            </div>
        </div>
    );
};

export default Countries;