import * as React from "react";
import { Dispatch } from 'redux';
import { reduceHP } from './actions';
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
    this.props.dispatch(reduceHP(1));
  }

  public render() {
    return (
      <div style={{ margin: 100 }}>
        <img src="koboruto.png" />
        <p>残りHP: {this.props.enemyHP}</p>
        <button onClick={this.decrementHP}>attack!</button>
      </div>
    )
  }
}
