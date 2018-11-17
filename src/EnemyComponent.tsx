import * as React from "react";
import { DiceValueType } from './diceValueType';
import { IDiceValue } from './reducer';

interface IProps {
  currentDiceValue: IDiceValue
  enemyHP: number;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 10 }}>
        <img src="koboruto.png" />
        <p>残りHP: {this.props.enemyHP}</p>
        {
          this.props.currentDiceValue.type === DiceValueType.Damage
            ? <strong style={{ color: 'red' }}>{this.props.currentDiceValue.value}ダメージ！</strong>
            : null
        }
      </div>
    )
  }
}
