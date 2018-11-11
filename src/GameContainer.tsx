import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import GameComponent from './GameComponent'
import { IGameState } from './reducer';

const mapStateToProps = (state: IGameState) => state
const mapDispatchToProps = (dispatch: Dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(GameComponent);
