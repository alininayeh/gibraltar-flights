import React from 'react';
import { FlightDay } from './FlightDay.component';

export const FlightsInfo = ({flights}) => (
    <div className='FlightsInfo'>
        {!!flights.length ? flights.map((flightDay, i) => <FlightDay day={flightDay.day} flights={flightDay.flights} key={i} />) : <span className='Loader' />}
    </div>
);