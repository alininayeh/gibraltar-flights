import React from 'react';
import { getStatusColor } from '../reducers';

export const Flight = ({flight}) => (
    <div className='Flight'>
        <span className='Flight-time'>{flight.time}</span>
        <span className='Flight-place'>{flight.type === 'arrivals' ? 'Coming from' : 'Going to'} {flight.place}</span>
        <span className={`Flight-status ${getStatusColor(flight.status)}`}>{flight.status}</span>
    </div>
);