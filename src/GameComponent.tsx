import * as React from "react";
import { Dispatch } from 'redux';
import { damageToEnemy } from './actions';
import EnemyComponent from './EnemyComponent';
import PlayerComponent from './PlayerComponent';
import { IGameState } from './reducer';

interface IProps extends IGameState {
  dispatch: Dispatch;
}

interface IState {
  enemyHP: number;
}

export default class extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);
  }

  public decrementHP = () => {
    this.props.dispatch(damageToEnemy(1));
  }

  public render() {
    return (
      <div style={{ margin: 100 }}>
        <EnemyComponent enemyHP={this.props.enemyHP} />
        <PlayerComponent
          dispatch={this.props.dispatch}
          currentDiceValue={this.props.currentDiceValue}
          playerDice={this.props.playerDice}
        />
      </div>
    )
  }
}
