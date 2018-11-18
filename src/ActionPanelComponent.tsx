import * as React from "react";
import { Dispatch } from 'redux';
import { addActionCount, changePhase, powerUpDamagePoint, powerUpDicePoint, powerUpMoneyPoint, setCurrentDiceValue } from './actions';
import { DiceValueType } from './diceValueType';
import { PhaseType } from './phaseType';

interface IProps {
  actionCount: number;
  dispatch: Dispatch;
  currentMoney: number;
}

const POWER_UP_DICE_COST = 1;
const POWER_UP_DAMAGE_COST = 2;
const POWER_UP_MONEY_COST = 2;

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 10, padding: 1, border: 'solid 1px' }}>
        <p>購入可能数: {this.props.actionCount}</p>
        <ul style={{ listStyle: 'none', paddingLeft: 10 }}>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x1 </span>
            <button onClick={() => this.powerUpDicePoint(1)}>ダイスの目をランダムに1強化</button>
          </li>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x2 </span>
            <button onClick={() => this.powerUpDamagePoint(1)}>攻撃の目をランダムに1強化</button>
          </li>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x2 </span>
            <button onClick={() => this.powerUpMoneyPoint(1)}>コインの目をランダムに1強化</button>
          </li>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
              <span><img src={'coin.png'} /> x2 </span>
              <button onClick={() => this.addActionCount(1)}>購入可能数を1増やす</button>
          </li>
        </ul>
      </div>
    )
  }

  private powerUpDicePoint(point: number) {
    if (this.props.currentMoney >= POWER_UP_DICE_COST) {
      this.props.dispatch(powerUpDicePoint(1));
      this.props.dispatch(changePhase(PhaseType.Standby));
      this.props.dispatch(setCurrentDiceValue({type: DiceValueType.Money, value: 0}));
    } else {
      alert('コインが足りません！');
    }
  }

  private powerUpDamagePoint(point: number) {
    if (this.props.currentMoney >= POWER_UP_DAMAGE_COST) {
      this.props.dispatch(powerUpDamagePoint(1));
      this.props.dispatch(changePhase(PhaseType.Standby));
      this.props.dispatch(setCurrentDiceValue({type: DiceValueType.Money, value: 0}));
    } else {
      alert('コインが足りません！');
    }
  }

  private powerUpMoneyPoint(point: number) {
    if (this.props.currentMoney >= POWER_UP_MONEY_COST) {
      this.props.dispatch(powerUpMoneyPoint(1));
      this.props.dispatch(changePhase(PhaseType.Standby));
      this.props.dispatch(setCurrentDiceValue({type: DiceValueType.Money, value: 0}));
    } else {
      alert('コインが足りません！');
    }
  }

  private addActionCount(count: number) {
    this.props.dispatch(addActionCount(count));
  }
}
