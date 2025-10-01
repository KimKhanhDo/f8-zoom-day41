import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProductCard from '@/components/ProductCard';
import styles from './ProductList.module.scss';
import { productActions, hooks } from '@/store/product';

function ProductList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productActions.getList());
    }, [dispatch]);

    // const products = useSelector((state) => state.product.list);
    const products = hooks.useProducts();

    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h2 className={styles.title}>Product List</h2>
            </header>

            <div className={styles.grid}>
                {products.map((product) => (
                    <Link
                        to={`/products/${product.slug}`}
                        key={product.id}
                    >
                        <ProductCard product={product} />
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default ProductList;
