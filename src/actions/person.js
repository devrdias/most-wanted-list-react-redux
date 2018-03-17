import { newToast } from './toast';
import axios from 'axios';

// =======
// ACTIONS
// =======
export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';
export const GET_PERSON_LIST = 'GET_PERSON_LIST';


// ================
// ACTIONS CREATORS
// ================

// ADD PERSON
export const addPerson = person => {
    const message = `You've just added ${person.name} to the Most Wanted List.`;

    return dispatch => {
        dispatch(addPersonAsync(person));
        dispatch(newToast(message));
    };
}
const addPersonAsync = person => {
    return {
        type: ADD_PERSON,
        payload: person
    };
}

// UPDATE PERSON
export const updatePerson = person => {
    const message = `You've just updated ${person.name} on the Most Wanted List.`;

    return dispatch => {
        dispatch(updatePersonAsync(person));
        dispatch(newToast(message));
    };
}
const updatePersonAsync = person => {
    return {
        type: UPDATE_PERSON,
        payload: person.id
    };
}

// DELETE PERSON
export const deletePerson = person => {
    const message = `You've just deleted ${person.name} from Most Wanted List.`;

    return dispatch => {
        dispatch(deletePersonAsync(person));
        dispatch(newToast(message));
    };
}
const deletePersonAsync = person => {
    return {
        type: DELETE_PERSON,
        payload: person.id
    };
}

// GET PERSON LIST ARRAY
export const getPersonList = () => {
    return dispatch => {
        axios.get('../person_list.json')
            .then(res => {
                console.log('Person list ::', res.data);
                const people = res.data.map(person => {
                    person.note = 'none';
                    return person;
                });
                dispatch(getPersonListAsync(people));
            });
    }
}
const getPersonListAsync = people => {
    return {
        type: GET_PERSON_LIST,
        payload: people
    }
}