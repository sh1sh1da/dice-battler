import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const damageToEnemy = actionCreator<number>(
  'DAMAGE_TO_ENEMY'
)

export const setCurrentDiceValue = actionCreator<number>(
  'SET_CURRENT_DICE_VALUE'
)
