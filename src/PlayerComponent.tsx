import * as React from "react";
import { Dispatch } from 'redux';
import { damageToEnemy } from './actions';

interface IProps {
  dispatch: Dispatch;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 10 }}>
        <button onClick={() => this.props.dispatch(damageToEnemy(1))}>attack!</button>
        <div style={{ marginTop: 20 }}>
          <span style={{ border: "solid", padding: 10 }}>1</span>
        </div>
      </div>
    )
  }
}
