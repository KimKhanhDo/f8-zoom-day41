import { useLoading } from '@/store/ui';
import styles from './Loading.module.scss';

function Loading({ text = 'Loading...' }) {
    const isLoading = useLoading();
    if (!isLoading) return null;

    return (
        <div className={styles.wrap}>
            <div className={styles.spinner} />
            <span className={styles.text}>{text}</span>
        </div>
    );
}

export default Loading;
