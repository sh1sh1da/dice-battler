import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';

export interface IGameState {
  enemyHP: number;
}

export const initialReduceGameState: IGameState = {
  enemyHP: 10
};

export default reducerWithInitialState(initialReduceGameState)
  .case(actions.damageToEnemy, (state: IGameState, payload: number) => ({
    ...state,
    enemyHP: state.enemyHP - payload
  }))
  .build();
