import newToast from './newToast';

export const ADD_PERSON = 'ADD_PERSON';
export const UPDATE_PERSON = 'UPDATE_PERSON';
export const DELETE_PERSON = 'DELETE_PERSON';


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