import * as React from "react";
import { Dispatch } from 'redux';
import { damageToEnemy, setCurrentDiceValue } from './actions';
import { DiceValueType } from './diceValueType';
import { PhaseType } from './phaseType';
import { IDiceValue } from './reducer';

interface IProps {
  dispatch: Dispatch;
  currentDiceValue: IDiceValue;
  currentPhase: PhaseType;
  playerDice: IDiceValue[];
  enemyHP: number;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {

  public render() {
    return (
      <div style={{ margin: 10 }}>
        <div style={{ marginTop: 20, width: 60, textAlign: "center" }}>
          <div style={{ border: "solid 2px", padding: 10 }}>
            {
              this.props.currentDiceValue.value === 0
                ? '?'
                : this.renderDiceView()
            }
          </div>
        </div>

        {
          this.props.currentPhase === PhaseType.Standby
            ? <button style={{ marginTop: 10 }} onClick={() => this.rollDice()}>ダイスロール</button>
            : null
        }
      </div>
    )
  }

  private renderDiceView(): JSX.Element {
    if (this.props.currentDiceValue.type === DiceValueType.Damage) {
      return <span><img src="sword.png" height="16px" /> {this.props.currentDiceValue.value} </span>;
    } else if (this.props.currentDiceValue.type === DiceValueType.Money) {
      return <span><img src="coin.png" height="16px" /> {this.props.currentDiceValue.value} </span>;
    }
    return <span>?</span>;
  }

  private rollDice() {
    const index = Math.floor(Math.random() * 6);
    const diceValue = this.props.playerDice[index];
    this.props.dispatch(setCurrentDiceValue({ type: diceValue.type, value: diceValue.value }));
    if (diceValue.type === DiceValueType.Damage) {
      if (this.props.enemyHP - diceValue.value > 0) {
        this.props.dispatch(damageToEnemy(diceValue.value));
      } else {
        this.props.dispatch(damageToEnemy(this.props.enemyHP));
      }
    }
  }
}
