import React, { useState, useEffect } from 'react';

function Rec() {
    const [currentTime, setCurrentTime] = useState('');

    // Function to fetch and update time every 2 seconds
    const updateTime = () => {
        fetch('http://127.0.0.1:5000/get_time')
            .then(response => response.json())
            .then(data => setCurrentTime(data.time))
            .catch(error => console.error('Error fetching time:', error));
    };

    useEffect(() => {
        // Initial call to start updating time
        updateTime();
        // Update time every 2 seconds
        const intervalId = setInterval(updateTime, 100);
        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Current Time:</h1>
            <p>{currentTime}</p>
        </div>
    );
}

export default Rec;