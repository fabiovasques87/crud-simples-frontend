import api from './api';

export const register = async (user) => {
    const response = await api.post('/auth/register', user);
    return response.data;
};

export const login = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const forgotPassword = async (email) => {
    await api.post('/auth/forgot-password', { email });
};

export const resetPassword = async (token, password) => {
    await api.post('/auth/reset-password', { token, password });
};
