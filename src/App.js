import logo from './logo.svg';
import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TemperatureConverter />
        <TodoList />
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
