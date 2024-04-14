import React, { useState } from 'react';
import './style/Cards.css';
import CirleProgressBar from './CircleProgressBar';

export default function Card({ comp, onChange, onDel }) {

    const [isEdit, setEdit] = useState(false);
    let content;
    if (isEdit) {
        content = (
            <>
                <input
                    value={comp.title}
                    onChange={e => onChange({ ...comp, title: e.target.value })}
                />
                <input
                    value={comp.desc}
                    onChange={e => onChange({ ...comp, desc: e.target.value })}
                />
                <button onClick={() => setEdit(false)}>
                    Save
                </button>
            </>
        );
    } else {
        content = (
            <>
                <CirleProgressBar pers={comp.pers} />
                <div className="content-container">
                    <h2>{comp.title}</h2>
                    <p>{comp.desc}</p>
                </div >
            </>
        );
    }
    return (
        <div className="card">
            {content}
            <div className='card-footer'>
                <button onClick={() => onDel(comp.title)}>Delete</button>
            </div>
        </div >
    );
}
