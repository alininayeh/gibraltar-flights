import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/App.container';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
serviceWorker.register();