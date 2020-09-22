import { combineReducers } from 'redux';
import popular from './popular';
import onAir from './onAir';
import rated from './rated';
import detail from './detail';

export default combineReducers({
    popular,
    rated,
    onAir,
    detail,
});
