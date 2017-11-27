import React, { Component } from 'react'
import './styles.css'
class Navbar extends Component {
    render() {
        return (
            <div className='navbar navbar-fixed-top'>
                <div className='navbar-brand'>NasaSuits</div>
                <button className='navbar-btn btn-default btn'>Team</button>
            </div>
        )
    }
}

export default Navbar
