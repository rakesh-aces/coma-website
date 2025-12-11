import { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="container section">
            <h1 className="text-center" style={{ marginBottom: '3rem' }}>Contact Us</h1>

            <div className="grid grid-cols-2 gap-lg" style={{ alignItems: 'start' }}>
                {/* Info */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Get in Touch</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <FaMapMarkerAlt style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }} />
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Address</h3>
                                <p className="text-secondary">P.O. Box 267<br />Powell, OH 43065</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <FaEnvelope style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }} />
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Email</h3>
                                <p className="text-secondary">coma.officials@gmail.com</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <FaPhone style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }} />
                            <div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Phone</h3>
                                <p className="text-secondary">(614) 555-0123</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div style={{ background: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)' }}>
                    {submitted ? (
                        <div className="text-center" style={{ padding: '2rem' }}>
                            <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>Message Sent!</h3>
                            <p>Thank you for contacting us. We will get back to you shortly.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1.5rem' }} onClick={() => setSubmitted(false)}>Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Send us a message</h3>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
                                <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
                                <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }} />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
                                <textarea required rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
