import { useState } from 'react';
import { FaGoogle, FaTimes, FaEnvelope, FaLock, FaUser, FaIdCard } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const LoginModal = ({ onClose }) => {
    const { login, signup, googleLogin } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        membershipType: 'individual'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            if (isLogin) {
                await login(formData.email, formData.password);
            } else {
                await signup(formData.email, formData.password, formData.name, formData.membershipType);
            }
            onClose();
        } catch (err) {
            console.error("Auth Error:", err);
            setError(err.message.replace('Firebase:', '').replace('auth/', ''));
        } finally {
            setIsLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setIsLoading(true);
        setError('');
        try {
            await googleLogin();
            onClose();
        } catch (err) {
            console.error("Google Auth Error:", err);
            setError("Failed to sign in with Google.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1100, backdropFilter: 'blur(4px)'
        }} onClick={onClose}>
            <div style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: 'var(--radius-lg)',
                width: '90%',
                maxWidth: '450px',
                position: 'relative',
                boxShadow: 'var(--shadow-lg)',
                maxHeight: '90vh',
                overflowY: 'auto'
            }} onClick={e => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'none', fontSize: '1.25rem', cursor: 'pointer', color: 'var(--text-secondary)' }}
                >
                    <FaTimes />
                </button>

                <h2 className="text-center" style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>
                    {isLogin ? 'Welcome Back' : 'Join COMA'}
                </h2>
                <p className="text-center text-secondary" style={{ marginBottom: '2rem' }}>
                    {isLogin ? 'Sign in to access member pricing' : 'Create an account to get started'}
                </p>

                {error && (
                    <div style={{
                        background: '#fee2e2',
                        color: '#b91c1c',
                        padding: '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: '1rem',
                        fontSize: '0.9rem',
                        textAlign: 'center'
                    }}>
                        {error}
                    </div>
                )}

                {/* Social Login */}
                <button
                    onClick={handleGoogleLogin}
                    className="btn"
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        background: 'white',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-color)',
                        marginBottom: '1.5rem',
                        padding: '0.75rem'
                    }}
                    disabled={isLoading}
                >
                    <FaGoogle style={{ color: '#DB4437' }} />
                    {isLoading ? 'Connecting...' : 'Continue with Google'}
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>OR</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
                </div>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <>
                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Full Name</label>
                                <div style={{ position: 'relative' }}>
                                    <FaUser style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--text-secondary)' }} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required={!isLogin}
                                        placeholder="John Doe"
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                                    />
                                </div>
                            </div>

                            <div style={{ marginBottom: '1rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Membership Plan</label>
                                <div style={{ position: 'relative' }}>
                                    <FaIdCard style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--text-secondary)' }} />
                                    <select
                                        name="membershipType"
                                        value={formData.membershipType}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', appearance: 'none', background: 'var(--bg-card)' }}
                                    >
                                        <option value="individual">Individual</option>
                                        <option value="family">Family</option>
                                        <option value="sustaining">Sustaining</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    )}

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <FaEnvelope style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--text-secondary)' }} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="you@example.com"
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <FaLock style={{ position: 'absolute', top: '1rem', left: '1rem', color: 'var(--text-secondary)' }} />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '0.75rem 0.75rem 0.75rem 2.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ width: '100%', padding: '0.875rem' }}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                    </button>
                </form>

                <p className="text-center" style={{ marginTop: '1.5rem', fontSize: '0.9rem' }}>
                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        style={{ color: 'var(--accent-color)', fontWeight: '600', cursor: 'pointer', background: 'none', border: 'none', textDecoration: 'underline' }}
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default LoginModal;
