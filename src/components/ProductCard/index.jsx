import styles from './ProductCard.module.scss';

function ProductCard({ product = {} }) {
    const {
        title,
        thumbnail,
        price,
        discountPercentage,
        rating,
        brand,
        category,
    } = product;

    const priceAfter =
        discountPercentage > 0
            ? (price * (100 - discountPercentage)) / 100
            : price;

    return (
        <article className={styles.card}>
            <div className={styles.thumbWrap}>
                <img
                    className={styles.thumb}
                    src={thumbnail}
                    alt={title}
                />
                {discountPercentage > 0 && (
                    <span className={styles.badge}>
                        - {discountPercentage}%
                    </span>
                )}
            </div>

            <div className={styles.body}>
                <h3
                    className={styles.title}
                    title={title}
                >
                    {title}
                </h3>
                <p className={styles.meta}>
                    <span className={styles.brand}>{brand}</span>
                    <span className={styles.dot}>•</span>
                    <span className={styles.category}>{category}</span>
                </p>

                <div className={styles.priceRow}>
                    <span className={styles.priceAfter}>
                        ${priceAfter.toFixed(2)}
                    </span>
                    {discountPercentage > 0 && (
                        <span className={styles.priceBefore}>
                            ${price.toFixed(2)}
                        </span>
                    )}
                </div>

                <div className={styles.bottomRow}>
                    <div className={styles.rating}>
                        <span className={styles.star}>★</span>
                        <span>{rating.toFixed(1)}</span>
                    </div>

                    <div className={styles.actions}>
                        <button className={styles.btnOutline}>View</button>
                        <button className={styles.btnPrimary}>Add</button>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;
