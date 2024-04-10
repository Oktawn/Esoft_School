import React from 'react';
import './style/Cards.css';
export default function Card({
    img_src ="./images/cat_main.jpg",
    Title = "Белых Дмитрий Михайлович",
    text = "вот так меня зовут 😝" }) {
    return (
        <div className="card">
            <img src={img_src} className='image-container' alt="card" />
            <div className="content-container">
                <h2>{Title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
