import React from 'react';

import "../App.css"

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='LHS'>
                <div className='links'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                    <a>Feedback</a>
                </div>
            </div>
            <div className='RHS'>
                <input type="text" placeholder='search' />
                <button> search</button>

            </div>

        </div>
    );
} 