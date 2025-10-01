import { combineReducers } from 'redux';
import { productReducer } from '@/store/product';
import { loadingReducer } from '@/store/ui';

const rootReducer = combineReducers({
    product: productReducer,
    ui: loadingReducer,
});

export default rootReducer;
