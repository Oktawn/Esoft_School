import React from 'react';
import './style/Cards.css';

export default function Card(pros) {
    return (
        <div className="card">
            <img src={pros.img_src} className='image-container' alt="card" />
            <div className="content-container">
                <h2>{pros.Title}</h2>
                <p>{pros.text}</p>
            </div>
        </div>
    );
}