import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { roleReducer } from './login';

export default combineReducers({
    form: formReducer,
    roleReducer
});