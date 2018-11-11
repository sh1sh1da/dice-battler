import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const damageToEnemy = actionCreator<number>(
  'DAMAGE_TO_ENEMY'
)
