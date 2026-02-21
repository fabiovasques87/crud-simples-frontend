import { createContext, useState, useEffect } from 'react';
import { login as loginService } from '../services/authService';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem('auth');
        if (stored) {
            const parsed = JSON.parse(stored);
            setUser(parsed.user);
            setToken(parsed.token);
        }
    }, []);

    const login = async (email, password) => {
        const { token, user } = await loginService({ email, password });
        setUser(user);
        setToken(token);
        localStorage.setItem('auth', JSON.stringify({ user, token }));
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('auth');
    };

    const value = { user, token, login, logout };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
