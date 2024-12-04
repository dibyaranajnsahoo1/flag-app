import React, { useState, useEffect } from "react";
import FlagIteams from './Flagitems';

const Flag = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchUrl();
    }, []);

    const fetchUrl = () => {
        const url = 'https://xcountries-backend.azurewebsites.net/all';

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {setCountries(data);})
            .catch((error) => { console.error("Failed to fetch countries data:", error.message); });
    };

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
