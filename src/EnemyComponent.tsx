import * as React from "react";

interface IProps {
  enemyHP: number;
}

/* tslint:disable:jsx-no-lambda */
export default class extends React.Component<IProps> {
  public render() {
    return (
      <div style={{ margin: 10 }}>
        <img src="koboruto.png" />
        <p>残りHP: {this.props.enemyHP}</p>
      </div>
    )
  }
}
