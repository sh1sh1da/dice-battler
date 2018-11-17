import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as actions from './actions';
import { DiceValueType } from './diceValueType';
import { PhaseType } from './phaseType';

export interface IDiceValue {
  type: string;
  value: number;
}

export interface IGameState {
  enemyHP: number;
  currentDiceValue: IDiceValue;
  playerDice: IDiceValue[];
  currentPhase: PhaseType;
  currentMoney: number;
}

export const initialReduceGameState: IGameState = {
  currentDiceValue: { type: DiceValueType.Initial, value: 0 },
  currentMoney: 0,
  currentPhase: PhaseType.Standby,
  enemyHP: 10,
  playerDice: [
    { type: DiceValueType.Damage, value: 1 },
    { type: DiceValueType.Damage, value: 1 },
    { type: DiceValueType.Damage, value: 1 },
    { type: DiceValueType.Money, value: 1 },
    { type: DiceValueType.Money, value: 1 },
    { type: DiceValueType.Money, value: 1 }
  ],
};

const powerUpDicePoint = (state: IGameState, payload: number): IGameState => {
  const targetIndex = Math.floor(Math.random() * state.playerDice.length)
  const poweredDice = state.playerDice.map((diceSurface, i) => {
    if (i === targetIndex) {
      return {
        ...diceSurface,
        value: diceSurface.value + payload
      };
    }
    return diceSurface;
  });

  return {
    ...state,
    currentPhase: PhaseType.Standby,
    playerDice: poweredDice
  };
}

const powerUpDamagePoint = (state: IGameState, payload: number): IGameState => {
  const damageIndexes: number[] = [];
  state.playerDice.forEach((diceSurface, i) => {
    if (diceSurface.type === DiceValueType.Damage) {
      damageIndexes.push(i);
    }
  })
  const targetIndex = damageIndexes[Math.floor(Math.random() * damageIndexes.length)];
  const poweredDice = state.playerDice.map((diceSurface, i) => {
    if (i === targetIndex) {
      return {
        ...diceSurface,
        value: diceSurface.value + payload
      };
    }
    return diceSurface;
  });

  return {
    ...state,
    currentPhase: PhaseType.Standby,
    playerDice: poweredDice
  };
}

const powerUpMoneyPoint = (state: IGameState, payload: number): IGameState => {
  const moneyIndexes: number[] = [];
  state.playerDice.forEach((diceSurface, i) => {
    if (diceSurface.type === DiceValueType.Money) {
      moneyIndexes.push(i);
    }
  })
  const targetIndex = moneyIndexes[Math.floor(Math.random() * moneyIndexes.length)];
  const poweredDice = state.playerDice.map((diceSurface, i) => {
    if (i === targetIndex) {
      return {
        ...diceSurface,
        value: diceSurface.value + payload
      };
    }
    return diceSurface;
  });

  return {
    ...state,
    currentPhase: PhaseType.Standby,
    playerDice: poweredDice
  };
}

export default reducerWithInitialState(initialReduceGameState)
  .case(actions.damageToEnemy, (state: IGameState, payload: number) => ({
    ...state,
    enemyHP: state.enemyHP - payload
  }))
  .case(actions.setCurrentDiceValue, (state: IGameState, payload: IDiceValue) => ({
    ...state,
    currentDiceValue: payload
  }))
  .case(actions.powerUpDicePoint, (state: IGameState, payload: number) => (
    powerUpDicePoint(state, payload)
  ))
  .case(actions.powerUpDamagePoint, (state: IGameState, payload: number) => (
    powerUpDamagePoint(state, payload)
  ))
  .case(actions.powerUpMoneyPoint, (state: IGameState, payload: number) => (
    powerUpMoneyPoint(state, payload)
  ))
  .case(actions.setCurrentMoney, (state: IGameState, payload: number) => ({
    ...state,
    currentMoney: payload
  }))
  .case(actions.changePhase, (state: IGameState, payload: PhaseType) => ({
    ...state,
    currentPhase: payload
  }))
  .build();
