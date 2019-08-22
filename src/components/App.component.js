import React from 'react';
import '../styles/App.scss';
import Header from './Header.component';

const App = ({children}) => (
    <div className='App'>
        <Header />
        {children}
    </div>
);

export default App;