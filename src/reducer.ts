import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';

export interface IEnemyState {
  hp: number;
}

export const initialReduceEnemyState: IEnemyState = {
  hp: 10
};

export default reducerWithInitialState(initialReduceEnemyState)
  .case(actions.reduceHP, (state: IEnemyState, payload: number) => ({
    ...state,
    hp: state.hp - payload
  }))
  .build();
