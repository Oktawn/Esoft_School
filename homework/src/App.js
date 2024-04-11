import './App.css';
import Card from './components/Cards';
import ButtonMy, { ButtonDes } from './components/Button';
import { useState } from 'react';


function App() {
  const [card, setCard] = useState();

  const onUpdateCompetences = (newCard) => {
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

          <p><a>My competencies </a> <ButtonMy name={"start"} onUpdate={onUpdateCompetences} /> <ButtonMy name={"next"} onUpdate={onUpdateCompetences} /> </p>

          <p><a>Desired competencies </a> <ButtonDes name={"start"} onUpdate={onUpdateCompetences} /> <ButtonDes name={"next"} onUpdate={onUpdateCompetences} /></p>
        </div>
      </body>
    </div>
  );
}

export default App;
