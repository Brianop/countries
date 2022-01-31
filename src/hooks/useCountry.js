import {useQuery} from "react-query";
import {QUERY_COUNTRY_BY_NAME_ENDPOINT} from "./useCountries";

export const useCountry = (search) => {
    const fetchCountry = async ({queryKey}) => {
        const response = await fetch(`${QUERY_COUNTRY_BY_NAME_ENDPOINT}/${queryKey[1]}`);

        if (!response.ok) {
            throw new Error('Network response was not ok')
        }

        const responseToJson = await response.json();

        return responseToJson[0];
    }

    return useQuery(['countries', search], fetchCountry);
};