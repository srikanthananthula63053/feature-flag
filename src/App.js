import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordin';
import LightDarkMode from './components/drak-light-mode';
import RandomColor from './components/random-color';
import TreeView from './components/tree-view';
import TicTacToe from './components/tic-tac-toe';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <LightDarkMode/> */}
      {/* <RandomColor/> */}
      {/* <TreeView/> */}
      <TicTacToe/>
    </div>
  );
}

export default App;
