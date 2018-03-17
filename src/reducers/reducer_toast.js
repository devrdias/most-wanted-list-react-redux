import { NEW_TOAST, CLEAR_TOAST } from '../actions/toast';

const toast = ({ state = null, action }) => {
    switch (action.type) {
        case NEW_TOAST:
            return action.payload;

        case CLEAR_TOAST:
            return '';

        default:
            return state;
    }
}

export default toast;