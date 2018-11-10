import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import EnemyComponent from './EnemyComponent'
import { IEnemyState } from './reducer';

const mapStateToProps = (state: IEnemyState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(EnemyComponent);
