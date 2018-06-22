import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({match}) => {
    return(
        <div className="notFound__main-container">
            <h2>{match.url} Not Found</h2>
            <h5> Please go <Link to="/">Home</Link> </h5>
        </div>
    )
}

module.exports = { NotFound }