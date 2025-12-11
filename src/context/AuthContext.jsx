import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check local storage for existing session
        const storedUser = localStorage.getItem('coma_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Mock login implementation
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = {
                    id: '123',
                    name: 'Test Member',
                    email: email,
                    type: 'member', // 'member' or 'guest'
                    memberSince: '2023'
                };
                setUser(mockUser);
                localStorage.setItem('coma_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 800);
        });
    };

    const googleLogin = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const mockUser = {
                    id: 'google_123',
                    name: 'Google User',
                    email: 'user@gmail.com',
                    avatar: 'https://ui-avatars.com/api/?name=Google+User&background=random',
                    type: 'member',
                    memberSince: '2024'
                };
                setUser(mockUser);
                localStorage.setItem('coma_user', JSON.stringify(mockUser));
                resolve(mockUser);
            }, 1000);
        });
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('coma_user');
    };

    return (
        <AuthContext.Provider value={{ user, login, googleLogin, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
