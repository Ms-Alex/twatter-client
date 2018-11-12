import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import messages from './messages';
import userInfo from './users';

const rootReducer = combineReducers({
    currentUser,
    errors,
    messages,
    userInfo
});

export default rootReducer;