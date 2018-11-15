import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';

export interface IDiceValue {
  type: string;
  value: number;
}

export interface IGameState {
  enemyHP: number;
  currentDiceValue: IDiceValue;
  playerDices: IDiceValue[];
}

export const initialReduceGameState: IGameState = {
  currentDiceValue: { type: 'attack', value: 0 },
  enemyHP: 10,
  playerDices: [
    { type: 'attack', value: 1 },
    { type: 'attack', value: 1 },
    { type: 'attack', value: 1 },
    { type: 'attack', value: 1 },
    { type: 'attack', value: 1 },
    { type: 'attack', value: 1 }
  ]
};

export default reducerWithInitialState(initialReduceGameState)
  .case(actions.damageToEnemy, (state: IGameState, payload: number) => ({
    ...state,
    enemyHP: state.enemyHP - payload
  }))
  .case(actions.setCurrentDiceValue, (state: IGameState, payload: IDiceValue) => ({
    ...state,
    currentDiceValue: payload
  }))
  .build();
