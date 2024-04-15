import './App.css';
import AddComp from './components/AddComp';
import './components/style/Cards.css'
import React, { useState } from 'react';
import CompList from './components/CompList';
import VisibleComp from './components/VisibleComp';

const initComp = [{ title: "думоть", desc: "принимать верные решения", pers: 0 }]


function App() {
  const [comps, setComps] = useState(initComp);

  function handleAddComp(title, desc, pers) {
    setComps([
      ...comps,
      {
        title: title,
        desc: desc,
        pers: pers
      },
    ]);
  }

  function handleShowAll() {
    return comps;
  }

  function handleShowSuccess() {
    const compsSucccess = comps.filter(t =>
      t.pers > 50);
    return compsSucccess;
  }

  function handleShowFail() {
    const compsSucccess = comps.filter(t =>
      t.pers <= 50);
    return compsSucccess;
  }


  function handleDelComp(compTitle) {
    setComps(
      comps.filter(t => t.title !== compTitle)
    );
  }



  return (
    <div className="App">
      <body className='card-body'>
        <AddComp onAddComp={handleAddComp} />
        <CompList
          comps={comps}
          onDelComp={handleDelComp} />
      </body>
    </div>
  );
}

export default App;
