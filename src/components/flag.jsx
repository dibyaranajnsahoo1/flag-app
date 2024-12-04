import React, { useState, useEffect } from "react";
import FlagIteams from './Flagitems';

const Flag = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchUrl();
    }, []);

    const fetchUrl = async () => {
        try {
            const url = 'https://xcountries-backend.azurewebsites.net/all';
            const res = await fetch(url);

            if (!res.ok) {
                // Log an error if the response status is not OK (e.g., 404, 500)
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data = await res.json();
            setCountries(data);
        } catch (error) {
            // Log the error with additional context
            console.error("Failed to fetch countries data:", error.message);
        }
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
