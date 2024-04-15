import './App.css';
import AddComp from './components/AddComp';
import './components/style/Cards.css'
import React, { useState } from 'react';
import CompList from './components/CompList';
import { VisibleComp } from './components/VisibleComp';

const initComp = [{ title: "думоть", desc: "принимать верные решения", pers: 0 }]


function App() {
  const [comps, setComps] = useState(initComp);
  const [showComps, setShow] = useState(comps);

  function handleAddComp(title, desc, pers) {
    setComps([
      ...comps,
      {
        title: title,
        desc: desc,
        pers: pers
      },
    ]);
    setShow([
      ...showComps,
      {
        title: title,
        desc: desc,
        pers: pers
      },
    ]);
  }

  function handleShowAll() {
    setShow(comps);
  }

  function handleHidden() {
    setShow([]);
  }

  function handleShowSuccess() {
    setShow(comps.filter(t =>
      t.pers > 50));
  }

  function handleShowFail() {
    setShow(comps.filter(t =>
      t.pers <= 50));
  }


  function handleDelComp(compTitle) {
    setComps(
      comps.filter(t => t.title !== compTitle)
    );
    setShow(
      showComps.filter(t => t.title !== compTitle)
    );
  }



  return (
    <div className="App">
      <body className='card-body'>
        <AddComp onAddComp={handleAddComp} />
        <VisibleComp onShow={handleShowAll} name={"Show All Cards"} />
        <VisibleComp onShow={handleShowSuccess} name={"Success Progress"} />
        <VisibleComp onShow={handleShowFail} name={"Failure Progress"} />
        <VisibleComp onShow={handleHidden} name={"Hidden All"} />
        <CompList
          comps={showComps}
          onDelComp={handleDelComp} />
      </body>
    </div>
  );
}

export default App;
