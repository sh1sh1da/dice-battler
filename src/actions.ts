import actionCreatorFactory from 'typescript-fsa';
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
