import actionCreatorFactory from 'typescript-fsa';
import { IDiceValue } from './reducer';
const actionCreator = actionCreatorFactory();

export const damageToEnemy = actionCreator<number>(
  'DAMAGE_TO_ENEMY'
)

export const setCurrentDiceValue = actionCreator<IDiceValue>(
  'SET_CURRENT_DICE_VALUE'
)
