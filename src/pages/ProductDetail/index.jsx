import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './ProductDetail.module.scss';
import { hooks, productActions } from '@/store/product';

function ProductDetail() {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const product = hooks.useProductDetail();

    useEffect(() => {
        if (slug) dispatch(productActions.getDetail(slug));
    }, [dispatch, slug]);

    return (
        <section className={styles.page}>
            <div className={styles.container}>
                <div className={styles.topbar}>
                    <Link
                        to="/products"
                        className={styles.backBtn}
                    >
                        ← Back to Products
                    </Link>
                </div>

                {product && (
                    <div className={styles.grid}>
                        <div className={styles.media}>
                            <div className={styles.hero}>
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                />
                                {product.discountPercentage > 0 && (
                                    <span className={styles.badge}>
                                        - {product.discountPercentage}%
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className={styles.info}>
                            <h1 className={styles.title}>{product.title}</h1>

                            <div className={styles.meta}>
                                <span className={styles.brand}>
                                    {product.brand}
                                </span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.category}>
                                    {product.category}
                                </span>
                                <span className={styles.dot}>•</span>
                                <span className={styles.sku}>
                                    SKU: {product.sku}
                                </span>
                            </div>

                            <div className={styles.priceBox}>
                                <span className={styles.priceAfter}>
                                    $
                                    {(product.discountPercentage > 0
                                        ? (product.price *
                                              (100 -
                                                  product.discountPercentage)) /
                                          100
                                        : product.price
                                    ).toFixed(2)}
                                </span>

                                {product.discountPercentage > 0 && (
                                    <span className={styles.priceBefore}>
                                        ${product.price.toFixed(2)}
                                    </span>
                                )}

                                <span className={styles.rating}>
                                    ★ {Number(product.rating || 0).toFixed(1)} -
                                    In stock: {product.stock}
                                </span>
                            </div>

                            <p className={styles.desc}>{product.description}</p>

                            <div className={styles.actions}>
                                <button className={styles.btnPrimary}>
                                    Add to Cart
                                </button>
                                <button className={styles.btnOutline}>
                                    Wishlist
                                </button>
                            </div>

                            <ul className={styles.bullets}>
                                <li>
                                    Minimum Order:{' '}
                                    {product.minimumOrderQuantity}
                                </li>
                                <li>Weight: {product.weight}</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProductDetail;
