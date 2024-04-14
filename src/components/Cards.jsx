import React, { useState } from 'react';
import './style/Cards.css';
import CirleProgressBar from './CircleProgressBar';

export default function Card({ comp, onChange, onDel }) {

    const [isEdit, setEdit] = useState(false);
    let content;
    if(isEdit){
        content=(
            <>
            </>
        )
    }



    return (
        <div className="card">
            <CirleProgressBar />
            <div className="content-container">
                <h2>{Title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
