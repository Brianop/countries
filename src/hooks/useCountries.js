import {useQuery} from "react-query";

const ALL_COUNTRIES_ENDPOINT = 'https://restcountries.com/v3.1/all';
export const QUERY_COUNTRY_BY_NAME_ENDPOINT = 'https://restcountries.com/v3.1/name'

export const useCountries = (filter) => {
    const fetchCountries = async ({queryKey}) => {
        const response = await fetch(queryKey[1] ? `${QUERY_COUNTRY_BY_NAME_ENDPOINT}/${queryKey[1]}` : ALL_COUNTRIES_ENDPOINT);

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        return response.json();
    }

    return useQuery(['countries', filter], fetchCountries, {
        select: (countries) => countries.map((country) => ({
            name: country.name.common,
            flag: country.flags.svg
        }))
    });
};