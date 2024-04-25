import React from 'react';
import './style/Cards.css';
import CirleProgressBar from './CircleProgressBar';

export default function Card({ comp, onDel }) {
    return (
        <div className="card">
            <CirleProgressBar pers={comp.pers} />
            <div className="content-container">
                <h2>{comp.title}</h2>
                <p>{comp.desc}</p>
            </div >
            <div className='card-footer'>
                <button onClick={() => onDel(comp.title)}>Delete</button>
            </div>
        </div >
    );
}
