import React, { useEffect, useState } from 'react';
import County from '../County/County';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Hello Baby :{countries.length}</h2>
            {
                countries.map(country =>
                    <County
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                        flag={country.flag}
                        region={country.region}>
                    </County>)
            }
        </div>
    );
};

export default Countries;