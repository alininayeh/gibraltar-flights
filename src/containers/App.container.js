import React from 'react';
import { getAllFlights } from '../reducers';
import App from '../components/App.component';
import { FlightsInfo } from '../components/FlightsInfo.component';

class AppContainer extends React.Component {
    state = {
        flights: []
    };

    getData() {
        fetch('https://gibraltar-flights-data.herokuapp.com/')
            .then(response => response.json())
            .then(data => this.setState({flights: getAllFlights(data)}));
    }
    
    componentDidMount() {
        this.getData();
    }

    render() {
        const {flights} = this.state;

        return (
            <App>
                <FlightsInfo flights={flights} />
            </App>
        );
    }
}

export default AppContainer;