import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const styles = {
        footer: {
            backgroundColor: 'var(--primary-color)',
            color: 'white',
            padding: '4rem 0 2rem',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
        },
        title: {
            fontSize: '1.2rem',
            marginBottom: '1rem',
            color: 'var(--secondary-color)',
        },
        link: {
            display: 'block',
            marginBottom: '0.5rem',
            color: '#cbd5e1',
            textDecoration: 'none',
            transition: 'color 0.2s',
        },
        socialIcon: {
            fontSize: '1.5rem',
            marginRight: '1rem',
            color: 'white',
            cursor: 'pointer',
        },
        bottom: {
            borderTop: '1px solid #334155',
            paddingTop: '2rem',
            textAlign: 'center',
            color: '#94a3b8',
            fontSize: '0.9rem',
        }
    };

    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.grid}>
                    <div>
                        <h3 style={styles.title}>COMA Ohio</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                            Connecting the Malayalee community in Central Ohio since 2008.
                            Building bridges, celebrating culture.
                        </p>
                    </div>

                    <div>
                        <h3 style={styles.title}>Quick Links</h3>
                        <Link to="/events" style={styles.link}>Upcoming Events</Link>
                        <Link to="/membership" style={styles.link}>Become a Member</Link>
                        <Link to="/sponsors" style={styles.link}>Our Sponsors</Link>
                        <Link to="/contact" style={styles.link}>Contact Us</Link>
                    </div>

                    <div>
                        <h3 style={styles.title}>Connect With Us</h3>
                        <div style={{ display: 'flex', marginBottom: '1rem' }}>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaFacebook /></a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaTwitter /></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}><FaInstagram /></a>
                        </div>
                        <p style={{ display: 'flex', alignItems: 'center', color: '#cbd5e1' }}>
                            <FaEnvelope style={{ marginRight: '0.5rem' }} /> coma.officials@gmail.com
                        </p>
                    </div>
                </div>

                <div style={styles.bottom}>
                    <p>&copy; {currentYear} Central Ohio Malayalee Association. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
