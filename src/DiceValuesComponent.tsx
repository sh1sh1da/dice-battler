import * as React from "react";
import { IDiceValue } from './reducer';

interface IProps {
  playerDice: IDiceValue[];
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ border: 'solid 1px' }}>
        <p style={{ margin: 4 }}>ダイスの状態</p>
        <ul>
          {this.renderDiceValues()}
        </ul>
      </div>
    )
  }

  private renderDiceValues() {
    return this.props.playerDice.map((diceSurface, i) => (
      <li key={i}>{diceSurface.type} {diceSurface.value}</li>
    ))
  }
}
