import actionCreatorFactory from 'typescript-fsa';
import { PhaseType } from './phaseType';
import { IDiceValue } from './reducer';
const actionCreator = actionCreatorFactory();

export const damageToEnemy = actionCreator<number>(
  'DAMAGE_TO_ENEMY'
)

export const setCurrentDiceValue = actionCreator<IDiceValue>(
  'SET_CURRENT_DICE_VALUE'
)

export const powerUpDicePoint = actionCreator<number>(
  'POWER_UP_DICE_POINT'
)

export const powerUpDamagePoint = actionCreator<number>(
  'POWER_UP_DAMAGE_POINT'
)

export const powerUpMoneyPoint = actionCreator<number>(
  'POWER_UP_MONEY_POINT'
)

export const setCurrentMoney = actionCreator<number>(
  'SET_CURRENT_MONEY'
)

export const changePhase = actionCreator<PhaseType>(
  'CHANGE_PHASE'
)

export const incrementTurn = actionCreator(
  'INCREMENT_TURN'
)
