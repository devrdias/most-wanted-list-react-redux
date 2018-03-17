// =======
// ACTIONS
// =======
export const NEW_TOAST = 'NEW_TOAST';
export const CLEAR_TOAST = 'CLEAR_TOAST';

// ================
// ACTIONS CREATORS
// ================

// NEW TOAST
export const newToast = message => {
    return dispatch => {
        dispatch(newToastAsync(message));
    }
}
const newToastAsync = message => {
    return {
        type: NEW_TOAST,
        payload: message
    };
}


// CLEAR TOAST
export const clearToast = () => {
    return dispatch => {
        dispatch(clearToastAsync())
    };
}
const clearToastAsync = () => {
    return {
        type: CLEAR_TOAST,
        payload: null
    }
}