import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';

export interface IGameState {
  enemyHP: number;
  currentDiceValue: number;
}

export const initialReduceGameState: IGameState = {
  currentDiceValue: 0,
  enemyHP: 10
};

export default reducerWithInitialState(initialReduceGameState)
  .case(actions.damageToEnemy, (state: IGameState, payload: number) => ({
    ...state,
    enemyHP: state.enemyHP - payload
  }))
  .case(actions.setCurrentDiceValue, (state: IGameState, payload: number) => ({
    ...state,
    currentDiceValue: payload
  }))
  .build();
