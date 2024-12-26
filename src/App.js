import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordin';
import LightDarkMode from './components/drak-light-mode';
import RandomColor from './components/random-color';
import TreeView from './components/tree-view';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlagsGlobalState from './components/featured-flag/context';
import FeatureFlags from './components/featured-flag';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <LightDarkMode/> */}
      {/* <RandomColor/> */}
      {/* <TreeView/> */}
      {/* <TicTacToe/> */}
      <FeatureFlagsGlobalState>
        <FeatureFlags />
      </FeatureFlagsGlobalState>
    </div>
  );
}

export default App;
