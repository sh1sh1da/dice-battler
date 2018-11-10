import actionCreatorFactory from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const reduceHP = actionCreator<number>(
  'REDUCE_HP'
)
