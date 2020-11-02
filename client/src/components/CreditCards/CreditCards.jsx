import React from 'react';
import './CreditCards.css';
import { Link } from 'react-router-dom';

function CreditCards(props) {
    return (
        <div className="card-layout">
            <div className="card-title-bar">
                <div className="card-title">My Crdit Cards</div>
                <Link>
                    <img className="card-button" src={process.env.PUBLIC_URL + 'assets/Edit-Icon.png'} alt="Edit"/>
                </Link>
            </div>
            <div className="card-list">
                <div className="card-item">000-0000-00000000 Crdit Cards</div>
            </div>
        </div>
    );
}

export default CreditCards;