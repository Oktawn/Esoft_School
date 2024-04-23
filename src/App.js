import './App.css';
import Card from './components/Cards';
import ButtonMyDescription, { ButtonDescriptionRecom } from './components/Button';
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
          <p><ButtonMyDescription name={"My card"} onUpdate={onStart} /></p>

          <p><a>My competencies </a> <ButtonMyDescription name="start" onUpdate={onUpdateCompetences} /> <ButtonMyDescription name="next" onUpdate={onUpdateCompetences} /> </p>

          <p><a>Desired competencies </a> <ButtonDescriptionRecom name="start" onUpdate={onUpdateCompetences} /> <ButtonDescriptionRecom name="next" onUpdate={onUpdateCompetences} /></p>
        </div>
      </body>
    </div>
  );
}

export default App;
