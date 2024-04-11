import React from 'react';
import './style/Cards.css';

const main_card = { img_src: "./images/cat_main.jpg", Title: "Белых Дмитрий Михайлович", text: "вот так меня зовут 😝" }


export default function Card({
    img_src = main_card.img_src,
    Title = main_card.Title,
    text = main_card.text }) {


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
