import { useState } from 'react';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import styles from '../payment/TicketModal.module.css'; // Reusing modal styles

const MembershipModal = ({ level, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 2000);
    };

    if (!level) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}><FaTimes /></button>

                {success ? (
                    <div className={styles.success}>
                        <div className={styles.checkIcon}>✓</div>
                        <h2>Welcome to COMA!</h2>
                        <p>You are now a <strong>{level.title}</strong> member.</p>
                        <p className="text-secondary">A welcome email has been sent to you.</p>
                        <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '1.5rem' }}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className={styles.header}>
                            <h2>Join Membership</h2>
                            <p className={styles.eventName}>{level.title}</p>
                            <p className={styles.eventPrice}>${level.price} / year</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className="grid grid-cols-2 gap-md">
                                <div className={styles.formGroup}>
                                    <label>First Name</label>
                                    <input type="text" required />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Last Name</label>
                                    <input type="text" required />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input type="email" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Phone Number</label>
                                <input type="tel" required />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Address</label>
                                <input type="text" required placeholder="Street Address" />
                            </div>

                            <div className={styles.divider}></div>

                            <div className={styles.formGroup}>
                                <label>Card Number (Mock)</label>
                                <input type="text" placeholder="4242 4242 4242 4242" />
                            </div>

                            <div className="grid grid-cols-2 gap-md">
                                <div className={styles.formGroup}>
                                    <label>Expiry</label>
                                    <input type="text" placeholder="MM/YY" />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>CVC</label>
                                    <input type="text" placeholder="123" />
                                </div>
                            </div>

                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={loading}>
                                {loading ? <><FaSpinner className="spin" /> Processing...</> : 'Pay & Join'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default MembershipModal;
