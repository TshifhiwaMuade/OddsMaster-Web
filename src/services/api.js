// src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (credentials) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return await response.json();
};

export const getProtectedData = async (token) => {
  const response = await fetch(`${API_BASE_URL}/api/protected`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  return await response.json();
};