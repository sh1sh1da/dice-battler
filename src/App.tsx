import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GameContainer from './GameContainer';
import { buildGameStore } from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={buildGameStore()}>
        <GameContainer />
      </Provider>
    );
  }
}

export default App;
