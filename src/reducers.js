const timeToNumber = time => parseInt(time.replace(':', ''));

const compareTime = (a, b) => {
    return timeToNumber(a.time) - timeToNumber(b.time);
};

export const getStatusColor = status => {
    const s = status.toLowerCase();
    
    if (s.includes('arrived') || s.includes('departed')) {
        return 'green';
    } else if (s.includes('deplayed') || s.includes('cancelled')) {
        return 'red';
    } else {
        return '';
    }
}

export const getAllFlights = data => {
    const days = [...new Set([...Object.keys(data.arrivals), ...Object.keys(data.departures)])];
    return days.map(day => {
        const flights = [...data.arrivals[day], ...data.departures[day]].sort(compareTime);
        return {day, flights};
    });
};