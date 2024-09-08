import React from 'react';
import axios from 'axios';
import './process.css';

function Availability() {
    const [startTime, setStartTime] = React.useState('');
    const [endTime, setEndTime] = React.useState('');
    const [duration, setDuration] = React.useState(30);

    const handleSubmit = async () => {
        try {
            await axios.post('/api/availability', {
                start_time: startTime,
                end_time: endTime,
                duration
            });
            alert('Availability saved!');
        } catch (error) {
            console.error('Error saving availability:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Set Availability</h2>
            <input
                type="datetime-local"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
            />
            <input
                type="datetime-local"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
            />
            <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
            />
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default Availability;