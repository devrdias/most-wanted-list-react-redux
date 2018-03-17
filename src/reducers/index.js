import { combineReducers } from 'redux';
import ToastReducer from './reducer_toast';
// import PersonReducer from './reducer_peson';

const rootReducer = combineReducers({
    // wantedList: PersonReducer,
    toast: ToastReducer,
});

export default rootReducer;
