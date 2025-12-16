import React, { createContext, useState, useContext, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                // Fetch user data from Firestore
                const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
                if (userDoc.exists()) {
                    setUser({ ...currentUser, ...userDoc.data() });
                } else {
                    // Fallback if doc doesn't exist (e.g. fresh google login before profile creation)
                    setUser(currentUser);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const signup = async (email, password, name, membershipType) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Create user document in Firestore
        await setDoc(doc(db, 'users', user.uid), {
            name,
            email,
            membershipType,
            memberSince: new Date().getFullYear().toString(),
            role: 'member'
        });

        return user;
    };

    const login = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const googleLogin = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user doc exists, if not create one
        const userRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userRef);

        if (!userDoc.exists()) {
            await setDoc(userRef, {
                name: user.displayName,
                email: user.email,
                membershipType: 'individual', // Default for Google Sign In
                memberSince: new Date().getFullYear().toString(),
                role: 'member',
                avatar: user.photoURL
            });
        }

        return user;
    };

    const logout = () => {
        return signOut(auth);
    };

    return (
        <AuthContext.Provider value={{ user, signup, login, googleLogin, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
