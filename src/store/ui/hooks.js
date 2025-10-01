import { useSelector } from 'react-redux';
import { getLoading } from './selectors';

export const useLoading = () => {
    const isLoading = useSelector(getLoading);
    return isLoading;
};
