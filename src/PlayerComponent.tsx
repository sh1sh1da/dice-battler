import * as React from "react";
import { Dispatch } from 'redux';
import { reduceHP } from './actions';

interface IProps {
  dispatch: Dispatch;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 100 }}>
        <button onClick={() => this.props.dispatch(reduceHP(1))}>attack!</button>
      </div>
    )
  }
}
