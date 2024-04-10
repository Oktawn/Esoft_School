import './App.css';
import { useState } from 'react';
import Card from './components/Cards';
import ButtonMy from './components/Button';


function App() {
  const [card, setCard] = useState({ img_src: "./images/cat_main.jpg", Title: "Белых Дмитрий Михайлович", text: "вот так меня зовут 😝" });


  return (
    <div className="App">
      <body className='card-body'>
        <Card cardSt={card} />
        <div className='card-footer'>
          <p> My card </p>

          <p><a>My competencies </a> <ButtonMy name={"prev"} /> <ButtonMy name={"next"} /> </p>

          <p><a>Desired competencies </a> <ButtonMy name={"prev"} /> <ButtonMy name={"next"} /></p>
        </div>
      </body>
    </div>
  );
}

export default App;
