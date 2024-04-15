import './App.css';
import CountdownTimer from './components/CountdownTimer';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer />
        <UserList />
      </header>
    </div>
  );
}

export default App;
