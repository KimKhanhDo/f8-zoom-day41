// useSelector  là nơi gắn các hàm trong selector.js với Redux store thật sự.

import { useSelector } from 'react-redux';
import { selectors } from '.'; // '.' - lấy từ file index trong folder product

export const useProducts = () => {
    const products = useSelector(selectors.getProducts);
    return products;
};

export const useProductDetail = () => {
    const productDetail = useSelector(selectors.getProductDetail);
    return productDetail;
};
