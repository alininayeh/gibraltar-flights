import React from 'react';
import { getStatusColor } from '../reducers';

export const Flight = ({flight}) => (
    <div className={`Flight ${getStatusColor(flight.status)}`}>
        <span className='Flight-time'>{flight.time}</span>
        <span className='Flight-place'>{flight.type === 'arrivals' ? 'Coming from' : 'Going to'} {flight.place}</span>
        <span className='Flight-status'>{flight.status}</span>
    </div>
);