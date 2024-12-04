import React, { useState, useEffect } from "react";
import FlagIteams from './Flagitems';

const Flag = () => {
    const url = 'https://xcountries-backend.azurewebsites.net/all';
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Failed to fetch countries data:", error.message))
        
    }, []);

    return (
        <div style={{ display: "flex", flexWrap: 'wrap', gap: '10px', alignItems: 'center', justifyContent: 'center' }}>
            {countries.map((element) => (
                <div key={element.abbr}>
                    <FlagIteams
                        name={element.name}
                        flag={element.flag}
                    />
                </div>
            ))}
        </div>
    );
};

export default Flag;
