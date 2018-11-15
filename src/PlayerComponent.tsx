import * as React from "react";
import { Dispatch } from 'redux';
import { damageToEnemy, setCurrentDiceValue } from './actions';
import { DiceValueType } from './diceValueType';
import { IDiceValue } from './reducer';

interface IProps {
  dispatch: Dispatch;
  currentDiceValue: IDiceValue;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {

  public render() {
    return (
      <div style={{ margin: 10 }}>
        <button onClick={() => this.attack()}>attack!</button>
        <div style={{ marginTop: 20, width: 60, textAlign: "center" }}>
          <div style={{ border: "solid", padding: 10 }}>
            {
              this.props.currentDiceValue.value === 0
                ? '?'
                : <span><img src="sword.png" height="16px" /> {this.props.currentDiceValue.value} </span>
            }
          </div>
        </div>
      </div>
    )
  }

  private attack() {
    const value = this.diceRoll();
    this.props.dispatch(setCurrentDiceValue({ type: DiceValueType.Damage, value }));
    this.props.dispatch(damageToEnemy(value));
  }

  private diceRoll() {
    const diceValues = [1, 2, 3, 4, 5, 6];
    const index = Math.floor(Math.random() * 6)
    return diceValues[index];
  }
}
