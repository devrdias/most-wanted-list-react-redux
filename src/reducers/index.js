import { combineReducers } from 'redux';
import ToastReducer from './reducer_toast';
import PersonReducer from './reducer_person';

const rootReducer = combineReducers({
    wantedList: PersonReducer,
    toast: ToastReducer,
});

export default rootReducer;
