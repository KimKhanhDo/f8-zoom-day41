import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { Provider } from 'react-redux';
import store from '@/store/store';

// Provider store={store} = cầu nối đưa Redux store vào React tree.
// Không có Provider → useSelector/useDispatch sẽ báo lỗi vì không tìm thấy Context.

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        {/* <StrictMode> */}
        <App />
        {/* </StrictMode> */}
    </Provider>
);
