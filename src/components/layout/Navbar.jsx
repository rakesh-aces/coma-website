import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
    FaBars, FaTimes, FaUserCircle,
    FaHome, FaCalendarAlt, FaIdCard, FaUsers,
    FaAddressBook, FaHandshake, FaImages, FaEnvelope, FaNewspaper
} from 'react-icons/fa';
import styles from './Navbar.module.css';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../auth/LoginModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const [showLoginModal, setShowLoginModal] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/', icon: <FaHome /> },
        { name: 'Events', path: '/events', icon: <FaCalendarAlt /> },
        { name: 'Membership', path: '/membership', icon: <FaIdCard /> },
        { name: 'Team', path: '/team', icon: <FaUsers /> },
        { name: 'Directory', path: '/directory', icon: <FaAddressBook /> },
        { name: 'Sponsors', path: '/sponsors', icon: <FaHandshake /> },
        { name: 'Gallery', path: '/media', icon: <FaImages /> },
        { name: 'Newsletters', path: '/newsletters', icon: <FaNewspaper /> },
        { name: 'Contact', path: '/contact', icon: <FaEnvelope /> },
    ];

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`container ${styles.navContainer}`}>
                    <Link to="/" className={styles.logo}>
                        <img src="/COMA-Logo.png" alt="COMA Logo" style={{ height: '60px', width: 'auto', maxWidth: '200px', objectFit: 'contain' }} />
                    </Link>

                    <div className={styles.mobileIcon} onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
                        {navLinks.map((link, index) => (
                            <li key={index} className={styles.navItem}>
                                <NavLink
                                    to={link.path}
                                    className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span style={{ fontSize: '1.1em' }}>{link.icon}</span>
                                    <span>{link.name}</span>
                                </NavLink>
                            </li>
                        ))}

                        {user ? (
                            <li className={styles.navItem} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-color)' }}>
                                    {user.avatar ? (
                                        <img src={user.avatar} alt={user.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                                    ) : (
                                        <FaUserCircle style={{ fontSize: '1.5rem' }} />
                                    )}
                                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{user.name}</span>
                                </div>
                                <button
                                    onClick={logout}
                                    className="btn btn-outline"
                                    style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', marginLeft: '0.5rem' }}
                                >
                                    Sign Out
                                </button>
                            </li>
                        ) : (
                            <li className={styles.navItem}>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => { setIsOpen(false); setShowLoginModal(true); }}
                                >
                                    Join / Sign In
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        </>
    );
};

export default Navbar;
