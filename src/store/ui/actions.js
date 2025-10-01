import { HIDE_LOADING, SHOW_LOADING } from './constants';

function showLoading() {
    return {
        type: SHOW_LOADING,
    };
}

function hideLoading() {
    return {
        type: HIDE_LOADING,
    };
}

export { showLoading, hideLoading };
