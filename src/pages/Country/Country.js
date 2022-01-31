import React from 'react';
import {useParams} from "react-router-dom";

import {useCountry} from "../../hooks/useCountry";

const Country = () => {
    const {country} = useParams();

    const {data, status} = useCountry(country);

    if (status === "loading") {
        return <div> loading</div>;
    }

    if (status === "error") {
        return <div> error</div>
    }

    return <div>
        <img src={data.flags.svg} alt={`${country} flag`}/>
        <h1>{data.name.common}</h1>
        <div><span>{data?.region ?? ''}</span> <span>{data?.capital?.[0] ?? ''}</span></div>
        <span>{data?.population ?? 0}</span>
    </div>
}

export default Country;