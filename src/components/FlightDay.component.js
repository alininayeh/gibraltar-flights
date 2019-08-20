import React from 'react';
import { Flight } from './Flight.component';

export const FlightDay = ({day, flights}) => (
    <div className='FlightDay'>
        <h2 className='FlightDay-title'>{day}</h2>
        <div className='FlightDay-flights'>
            {flights.map((flight, i) => <Flight flight={flight} key={i} />)}
        </div>
    </div>
);