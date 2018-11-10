import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import EnemyContainer from './EnemyContainer';
import { buildEnemyStore } from './store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={buildEnemyStore()}>
        <EnemyContainer />
      </Provider>
    );
  }
}

export default App;
