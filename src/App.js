import './App.css';
import CountdownTimer from './components/CountdownTimer';
import UserList from './components/UserList';
import WindowSize from './components/WindowSize';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CountdownTimer />
        <UserList />
        <WindowSize />
      </header>
    </div>
  );
}

export default App;
