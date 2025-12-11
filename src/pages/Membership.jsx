import { useState } from 'react';
import MembershipModal from '../components/payment/MembershipModal';
import { useAuth } from '../context/AuthContext';
import { FaCheck } from 'react-icons/fa';
import styles from './Membership.module.css';

const membershipLevels = [
    {
        id: 'individual',
        title: 'Individual',
        price: 25,
        features: ['Single membership', 'Event tickets must be purchased at discounted member pricing.']
    },
    {
        id: 'family',
        title: 'Family',
        price: 50,
        features: ['Spouse & children included', 'Event tickets must be purchased at discounted member pricing.'],
        recommended: true
    },
    {
        id: 'sustaining_ind',
        title: 'Sustaining Individual',
        price: 200,
        features: ['Individual benefits', 'Covers one adult.', 'Includes free admission to all COMA events (except mega events).']
    },
    {
        id: 'sustaining_couple',
        title: 'Sustaining Couple',
        price: 300,
        features: ['Couple benefits', 'Covers member and spouse.', 'Includes free admission to all COMA events (except mega events).']
    },
    {
        id: 'sustaining_family',
        title: 'Sustaining Family',
        price: 500,
        features: ['Full family benefits', 'Covers member, spouse, children, and parents.', 'Includes free admission to all COMA events (except mega events).']
    }
];

const Membership = () => {
    const [selectedLevel, setSelectedLevel] = useState(null);
    const { user } = useAuth();

    return (
        <div className="container section">
            <div className="text-center" style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Become a Member</h1>
                <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    Join the Central Ohio Malayalee Association and connect with your community.
                    Your support helps us organize cultural events and charity initiatives.
                </p>
                <div style={{ marginTop: '1rem', fontWeight: '500', color: 'var(--primary-color)' }}>
                    Membership is valid from July 1st, 2025 to Jun 30th, 2026.
                </div>
                {!user && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#e0f2fe', borderRadius: 'var(--radius-md)', display: 'inline-block' }}>
                        <span style={{ color: '#0369a1', fontWeight: '600' }}>Note: </span>
                        Sign In to see exclusive member pricing for events.
                    </div>
                )}
            </div>

            <div className={styles.grid}>
                {membershipLevels.map(level => (
                    <div key={level.id} className={`${styles.card} ${level.recommended ? styles.recommended : ''}`}>
                        {level.recommended && <div className={styles.badge}>Most Popular</div>}
                        <h3 className={styles.title}>{level.title}</h3>
                        <div className={styles.price}>
                            ${level.price} <span className={styles.period}>/ {level.id === 'life' || level.id === 'patron' ? 'once' : 'year'}</span>
                        </div>
                        <ul className={styles.features}>
                            {level.features.map((feature, idx) => (
                                <li key={idx}><FaCheck className={styles.check} /> {feature}</li>
                            ))}
                        </ul>
                        <button
                            className={`btn ${level.recommended ? 'btn-primary' : 'btn-outline'} ${styles.button}`}
                            onClick={() => setSelectedLevel(level)}
                        >
                            Choose {level.title}
                        </button>
                    </div>
                ))}
            </div>

            {/* Common Benefits Section */}
            <div style={{ marginTop: '4rem', background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <h2 className="text-center" style={{ marginBottom: '2rem', color: 'var(--primary-color)' }}>Common Benefits (All Plans)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {[
                        'Member discounts for COMA events',
                        'Member-only events',
                        'Active/healthy clubs (Walk/Run/Bike)',
                        'Malayalam classes for adults & kids',
                        'Year-round discounts from COMA sponsors',
                        'Charity and volunteering opportunities',
                        'Access to COMA Youth Wing (for family plans)',
                        'Industry expert meets, 101 sessions',
                        'University campus tours & youth activities'
                    ].map((benefit, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: 'var(--bg-secondary)',
                                color: 'var(--primary-color)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                fontSize: '0.8rem'
                            }}>
                                <FaCheck />
                            </div>
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>
            </div>

            {selectedLevel && (
                <MembershipModal level={selectedLevel} onClose={() => setSelectedLevel(null)} />
            )}
        </div>
    );
};

export default Membership;
