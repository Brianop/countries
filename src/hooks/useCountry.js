import {useQuery,} from "react-query";

export const useCountry = (search) => {
    const fetchCountry = async ({queryKey}) => {
        const response = await fetch(`https://restcountries.com/v3.1/name/${queryKey[1]}`);

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const responseToJson = await response.json();

        return responseToJson[0];
    }

    return useQuery(['countries', search], fetchCountry);
};