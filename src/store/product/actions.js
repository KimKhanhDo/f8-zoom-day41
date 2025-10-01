import http from '@/utils/http';
import { SET_LIST, SET_DETAIL, GET_LIST, GET_DETAIL } from './constants';
import { actions as ui } from '@/store/ui';

// middleware trả về 1 async function với 2 tham số dispatch & getState
// cách sử dụng của dispatch & getState từ middleware same obj store, nhưng ko cần tốn công để gọi obj store ở đây
// middleware giúp dispatch action & hỗ trợ gọi API ngay bên trong action
function getList() {
    return async (dispatch) => {
        dispatch({
            type: GET_LIST,
        });
        dispatch(ui.showLoading()); // bật loading

        try {
            const response = await http.get('/products');
            dispatch(setList(response.data.items));
        } catch (error) {
            console.error('❌ Error getList', error);
        } finally {
            dispatch(ui.hideLoading()); // bật loading
        }
    };
}

function setList(products) {
    return {
        type: SET_LIST,
        payload: products,
    };
}

function getDetail(slug) {
    return async (dispatch) => {
        dispatch({ type: GET_DETAIL }); // reset detail về null
        dispatch(ui.showLoading()); // bật loading

        try {
            const response = await http.get(`/products/${slug}`);
            dispatch(setDetail(response.data));
        } catch (error) {
            console.error('❌ Error getDetail', error);
        } finally {
            dispatch(ui.hideLoading()); // tắt loading
        }
    };
}

function setDetail(product) {
    return {
        type: SET_DETAIL,
        payload: product,
    };
}

export { getList, setList, getDetail, setDetail };
