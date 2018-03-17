import { ADD_PERSON, DELETE_PERSON, UPDATE_PERSON, GET_PERSON_LIST } from '../actions/person';


const person = ({ state = null, action }) => {
    switch (action.type) {
        case ADD_PERSON:
            return [action.payload, ...state];

        case UPDATE_PERSON:
            return state.map(person => {
                if (person.id === action.payload) {
                    return action.payload
                }
                return person;
            })
        case DELETE_PERSON:
            return state.filter(person => { person.id !== action.payload });

        case GET_PERSON_LIST:
            return action.payload;

        default:
            state;
    }
}