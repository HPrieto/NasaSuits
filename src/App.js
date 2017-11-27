import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Import Components
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';

class App extends Component {
    componenetWillMount() {
        console.log('App Started...')
    }
    render() {
        return (
            <div>
                <Navbar/>
                <Home/>
                <div>hello</div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
