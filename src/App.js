import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Home from './Components/Home.js';

class App extends Component {
    componenetWillMount() {
        console.log('App Started...')
    }
    render() {
        return (
            <div>
                <Home/>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
