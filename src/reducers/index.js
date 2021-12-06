import counter from './counter';
import userList from './user-list';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter,
    userList
})

export default rootReducer