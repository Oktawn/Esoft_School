import './App.css';
import Card from './components/Cards';

function App() {
  return (
    <div className="App">
      <body className='card-body'>
        <Card
          img_src={require('./components/content/cat_main.jpg')}
          Title={"Белых Дмитрий Михайлович"}
          text={"вот так меня зовут 😝"}
        />
        
      </body>
    </div>
  );
}

export default App;
