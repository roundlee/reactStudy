import logo from './logo.svg';
import './App.css';
import Clock from './clock-module/Clock'
import List from './list-show/List'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <List data={[1,2,3,4]} />
      </header>
    </div>
  );
}

export default App;
