import { useState } from 'react';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import styles from './TicketModal.module.css';

const TicketModal = ({ event, onClose }) => {
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

    if (!event) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}><FaTimes /></button>

                {success ? (
                    <div className={styles.success}>
                        <div className={styles.checkIcon}>✓</div>
                        <h2>Payment Successful!</h2>
                        <p>Your tickets for <strong>{event.title}</strong> have been booked.</p>
                        <p className="text-secondary">A confirmation email has been sent to you.</p>
                        <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '1.5rem' }}>Close</button>
                    </div>
                ) : (
                    <>
                        <div className={styles.header}>
                            <h2>Purchase Tickets</h2>
                            <p className={styles.eventName}>{event.title}</p>
                            <p className={styles.eventPrice}>${event.price} / ticket</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Full Name</label>
                                <input type="text" required placeholder="John Doe" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input type="email" required placeholder="john@example.com" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Number of Tickets</label>
                                <input type="number" min="1" max="10" defaultValue="1" required />
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
                                {loading ? <><FaSpinner className="spin" /> Processing...</> : 'Pay Now'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default TicketModal;
