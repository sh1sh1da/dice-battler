import * as React from "react";
import { Dispatch } from 'redux';
import { damageToEnemy, setCurrentDiceValue } from './actions';

interface IProps {
  dispatch: Dispatch;
  currentDiceValue: number;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {

  public render() {
    return (
      <div style={{ margin: 10 }}>
        <button onClick={() => this.attack()}>attack!</button>
        <div style={{ marginTop: 20 }}>
          <span style={{ border: "solid", padding: 10 }}>
            {this.props.currentDiceValue === 0 ? '?' : this.props.currentDiceValue}
          </span>
        </div>
      </div>
    )
  }

  private attack() {
    const value = this.diceRoll();
    this.props.dispatch(setCurrentDiceValue(value));
    this.props.dispatch(damageToEnemy(value));
  }

  private diceRoll() {
    const diceValues = [1, 2, 3, 4, 5, 6];
    const index = Math.floor(Math.random() * 6)
    return diceValues[index];
  }
}
