import './App.css';
import Card from './components/Cards';
import ButtonMy from './components/Button';
import { useState } from 'react';


function App() {
  const [card, setCard] = useState();

  const onClick = (newCard) => {
    setCard(newCard)
  }


  return (
    <div className="App">
      <body className='card-body'>
        <Card {...card} />
        <div className='card-footer'>
          <p> My card </p>

          <p><a>My competencies </a> <ButtonMy name={"start"} onUpdate={onClick} /> <ButtonMy name={"next"} onUpdate={onClick} /> </p>

          <p><a>Desired competencies </a> <ButtonMy name={"start"} /> <ButtonMy name={"next"} /></p>
        </div>
      </body>
    </div>
  );
}

export default App;
