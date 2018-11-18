import * as React from "react";
import { Dispatch } from 'redux';
import ActionPanelComponent from './ActionPanelComponent';
import { damageToEnemy } from './actions';
import DiceValuesComponent from './DiceValuesComponent';
import EnemyComponent from './EnemyComponent';
import { PhaseType } from './phaseType';
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
      <div style={{ margin: 40, width: 300 }}>
        <p>ターン: {this.props.currentTurn}</p>
        <EnemyComponent
          enemyHP={this.props.enemyHP}
          currentDiceValue={this.props.currentDiceValue}
        />
        <DiceValuesComponent playerDice={this.props.playerDice} />
        <PlayerComponent
          dispatch={this.props.dispatch}
          currentDiceValue={this.props.currentDiceValue}
          playerDice={this.props.playerDice}
          enemyHP={this.props.enemyHP}
          currentPhase={this.props.currentPhase}
        />
        {this.props.currentPhase === PhaseType.Action
          ? <ActionPanelComponent dispatch={this.props.dispatch} currentMoney={this.props.currentMoney} actionCount={this.props.actionCount} />
          : null
        }
      </div>
    )
  }
}
