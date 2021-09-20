import React from 'react';
import './County.css'
const County = (props) => {
    //console.log(props);
    const { name, capital, region, population, flag } = props;
    return (
        <div className="box-model">
            <img className="flag-style" src={flag} alt="" />
            <h3>Name : {name}</h3>
            <h5>Capital : {capital}</h5>
            <h5>Population : {population}</h5>
            <p>Region : {region}</p>
        </div>
    );
};

export default County;