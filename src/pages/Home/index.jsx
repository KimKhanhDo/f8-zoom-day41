import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

function Home() {
    return (
        <main className={styles.wrap}>
            <header className={styles.nav}>
                <div className={styles.brand}>
                    <span className={styles.logo}>R</span>
                    <span className={styles.title}>React Redux</span>
                </div>
            </header>

            <section className={styles.hero}>
                <div className={styles.card}>
                    <h1 className={styles.h1}>React Redux</h1>
                    <p className={styles.sub}>
                        Invest in your skills today, enjoy the freedom tomorrow
                        👩🏻‍💻
                    </p>

                    <div className={styles.cta}>
                        <Link
                            className={styles.btnPrimary}
                            to="/products"
                        >
                            Go to Products
                        </Link>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <span>React Redux</span>
                <span className={styles.dot}>•</span>
                <span>Middleware</span>
                <span className={styles.dot}>•</span>
                <span>Thunk</span>
            </footer>
        </main>
    );
}

export default Home;
