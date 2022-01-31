import {useQuery} from "react-query";

export const useCountries = (filter) => {
    const fetchCountries = async () => {
        const response = await fetch('https://restcountries.com/v3.1/all');

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        return response.json();
    }

    return useQuery(['countries'], fetchCountries, {
        select: (countries) => countries.map((country) => ({name: country.name.common, flag: country.flags.svg})).filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    });
};