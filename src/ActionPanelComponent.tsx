import * as React from "react";
import { Dispatch } from 'redux';
import { powerUpDamagePoint, powerUpDicePoint, powerUpMoneyPoint } from './actions';

interface IProps {
  dispatch: Dispatch;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 10, padding: 1, border: 'solid 1px' }}>
        <ul style={{ listStyle: 'none', paddingLeft: 10 }}>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x1 </span>
            <button onClick={() => this.props.dispatch(powerUpDicePoint(1))}>ダイスの目をランダムに1強化</button>
          </li>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x2 </span>
            <button onClick={() => this.props.dispatch(powerUpDamagePoint(1))}>攻撃の目をランダムに1強化</button>
          </li>
          <li style={{ marginTop: 8, marginBottom: 8 }}>
            <span><img src={'coin.png'} /> x2 </span>
            <button onClick={() => this.props.dispatch(powerUpMoneyPoint(1))}>コインの目をランダムに1強化</button>
          </li>
        </ul>
      </div>
    )
  }
}
