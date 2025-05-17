import axios from "axios";
import { useEffect, useState } from "react";

const CountrySelector = ({onSelectCountry}) => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then((response) => {
            const countryData = response.data.map((country) => ({
                name: country.name.common,
                code: country.cca2.toLowerCase(),
            }));
            setCountries(countryData);
        })
        .catch((error) => {
            console.error("Error fetching countries: ", error);
        });
    }, []);

    return (
        <select onChange={(e) => onSelectCountry(e.target.value)}>
            <option value = "usa">USA</option>
            {countries.map((country) => (
                <option key={country.code} value = {country.code}>
                    {country.name}
                </option>
            ))}
        </select>
    );
};

export default CountrySelector;