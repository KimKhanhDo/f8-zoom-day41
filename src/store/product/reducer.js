import { SET_LIST, SET_DETAIL, GET_LIST, GET_DETAIL } from './constants';

const initState = {
    list: [],
    detail: null,
};

function productReducer(state = initState, action) {
    switch (action.type) {
        case GET_LIST: {
            return {
                ...state,
                list: [],
            };
        }

        case SET_LIST: {
            return {
                ...state,
                list: action.payload,
            };
        }

        case GET_DETAIL: {
            return {
                ...state,
                detail: null,
            };
        }

        case SET_DETAIL: {
            return {
                ...state,
                detail: action.payload,
            };
        }

        default:
            return state;
    }
}

export default productReducer;
