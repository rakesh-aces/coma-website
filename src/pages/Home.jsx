import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Central Ohio <br />
                            <span className={styles.highlight}>Malayalee Association</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Celebrating Culture, Community, and Connection since 2008.
                        </p>
                        <div className={styles.heroButtons}>
                            <Link to="/membership" className="btn btn-primary" style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }}>Become a Member</Link>
                            <Link to="/events" className="btn btn-outline" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', color: 'white', borderColor: 'white' }}>Upcoming Events</Link>
                            <Link to="/events" className="btn btn-primary" style={{ backgroundColor: 'var(--secondary-color)', color: 'black' }}>Purchase Tickets</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.heroBackground}></div>
            </section>

            {/* About / Pillars Section */}
            <section className="section" style={{ background: 'var(--bg-color)' }}>
                <div className="container">
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutText}>
                            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>About Us</h2>
                            <p className="text-secondary" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', leading: '1.8' }}>
                                COMA (Central Ohio Malayalee Association) is a non-profit association run by Malayalees for Malayalees in the Columbus metropolitan area. Malayalees hail from the beautiful coastal state of Kerala in India.
                            </p>
                            <p className="text-secondary" style={{ fontSize: '1.125rem', marginBottom: '1.5rem', leading: '1.8' }}>
                                The Central Ohio Malayalee Association (COMA) was formally registered as a “not for profit” organization in October 2007. COMA strives to bring Central Ohio Malayalees together and also organizes various cultural and seasonal events throughout the year.
                            </p>
                        </div>

                        {/* Visual Pillars */}
                        <div className={styles.pillars}>
                            <div className={styles.card}>
                                <div className={styles.icon}>🤝</div>
                                <h3>Community</h3>
                                <p>Fostering a sense of belonging and unity.</p>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.icon}>🎭</div>
                                <h3>Culture</h3>
                                <p>Preserving our rich traditions and arts.</p>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.icon}>❤️</div>
                                <h3>Charity</h3>
                                <p>Supporting those in need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Highlights - Placeholder for dynamic content */}
            <section className={`section ${styles.highlights}`}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '2rem' }}>Latest Highlights</h2>
                    <div className="grid grid-cols-2 gap-lg">
                        <div className={styles.newsCard}>
                            <span className={styles.date}>Upcoming</span>
                            <h3>Onam Celebration 2025</h3>
                            <p>Join us for the grand Onam Sadhya and cultural programs.</p>
                            <Link to="/events" className={styles.readMore}>Learn More &rarr;</Link>
                        </div>
                        <div className={styles.newsCard}>
                            <span className={styles.date}>News</span>
                            <h3>Charity Drive Success</h3>
                            <p>Thanks to our members for the overwhelming support in our recent food drive.</p>
                            <Link to="/newsletters" className={styles.readMore}>Read Report &rarr;</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className={`section text-center ${styles.cta}`}>
                <div className="container">
                    <h2>Ready to be part of our family?</h2>
                    <p style={{ margin: '1rem 0 2rem' }}>Join COMA today and enjoy exclusive member benefits.</p>
                    <Link to="/membership" className="btn btn-primary">Join COMA Today</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
