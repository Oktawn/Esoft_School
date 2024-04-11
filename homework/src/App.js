import './App.css';
import Card from './components/Cards';
import ButtonMy from './components/Button';
import { useState } from 'react';


function App() {
  const [card, setCard] = useState();

  const onUpdate = (newCard) => {
    setCard(newCard)
  }
  const onStart = () => {
    setCard()
  }


  return (
    <div className="App">
      <body className='card-body'>
        <Card {...card} />
        <div className='card-footer'>
          <p><ButtonMy name={"My card"} onUpdate={onStart} /></p>

          <p><a>My competencies </a> <ButtonMy name={"start"} onUpdate={onUpdate} /> <ButtonMy name={"next"} onUpdate={onUpdate} /> </p>

          <p><a>Desired competencies </a> <ButtonMy name={"start"} /> <ButtonMy name={"next"} /></p>
        </div>
      </body>
    </div>
  );
}

export default App;
