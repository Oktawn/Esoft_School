import './App.css';
import AddComp from './components/AddComp';
import Card from './components/Cards';
import { useState } from 'react';
import CompList from './components/CompList';

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
      }
    ]);
  }

  function handleChangeComp(newComp) {
    setComps(comps.map(t => {
      if (t.title == newComp.title)
        return newComp;
      else
        return t;
    }));
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
          onChangeComp={handleChangeComp}
          onDelComp={handleDelComp} />
      </body>
    </div>
  );
}

export default App;
