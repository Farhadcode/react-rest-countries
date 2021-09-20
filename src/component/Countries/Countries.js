import React, { useEffect, useState } from 'react';
import County from '../County/County';
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Total Number Of Countries : {countries.length}</h2>
            <div className="grid-style">
                {
                    countries.map(country => <County
                        key={country.alpha3Code}
                        country={country}
                    ></County>)
                }
            </div>
        </div>
    );
};

export default Countries;